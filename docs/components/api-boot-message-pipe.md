---
title: MessagePipe分布式消息管道组件
sidebar_position: 1
---

# MessagePipe负载均衡分布式消息管道



## 1. 简介

`Message Pipe`是基于`Redis`实现的**顺序消息管道**，由于内部引入了`Redisson`分布式锁所以它是线程安全的，多线程情况下也会按照写入管道的顺序执行消费。

:::tip

该框架完全可以投入生产环境使用，目前在某公司物联网平台承担**~500万次/日**的消息转发流量。

:::

## 2. 架构

### 2.1 通信架构

`Message Pipe`采用`Client`、`Server`概念进行设计，内部通过`grpc-netty`来建立消息通道相互通信的长连接，消息的分发由`Server`负责，而每一个管道内的消息在分发时会通过`LoadBalance（负载均衡）`的方式来获取在线的`Client`实例信息，并向`Client`顺序发送消息，`Client`响应处理成功后才会处理下一条消息。

### 2.2 特性

- 自动注册
- 心跳检查
- 消息分发
- 顺序消费
- 读写分离
- 线程安全
- 负载均衡
- 自动剔除
- ...

## 3. 客户端

客户端（`Client`）角色定位是处理服务端（`Server`）分发的管道消息，当然分发消息时服务端会检索客户端是否支持了（详见：[通过管道名称匹配可处理该管道消息的Client列表](/docs/components/api-boot-message-pipe#471-通过管道名称匹配可处理该管道消息的client列表)）该消息管道的数据处理。

### 3.1 添加依赖

```xml
<dependency>
  <groupId>org.minbox.framework</groupId>
  <artifactId>api-boot-starter-message-pipe-server</artifactId>
</dependency>
```

:::tip
如果未添加`ApiBoot`版本依赖，请访问[版本依赖](/docs/out-box/version-rely)查看添加方式。
:::

### 3.2 消息处理器

`MessageProcessor`（消息处理器）用于处理服务端分发的消息。

#### 3.2.1 处理器匹配类型

每一个消息处理器创建时都需要通过`#bindingPipeName()`方法绑定**支持处理的消息管道**名称（`MessagePipe Name`），绑定时支持两种方式（`#processorType()`）来匹配处理的消息管道名称。

服务端在分发消息时首先会根据`消息处理器`绑定的`管道名称`以及`处理类型`来匹配客户端GRPC实例，一旦匹配成功消息就会通过GRPC长连接分发到客户端，客户端会根据分发消息时携带的`管道名称`来对应创建消息处理器的`Cglib代理`去执行处理消息。

- **SPECIFIC**：处理具体消息管道名称的消息，需要完全匹配
- **REGEX**：支持通过正则表达式方式匹配处理消息管道的消息，如：example.*，则会处理名称为：`example.1`、`example.admin`、`example.one`的管道消息

### 3.3 消息处理器管理器

客户端在收到服务端分发的消息时，会通过消息处理器管理器（`MessageProcessorManager`）来获取`MessageProcessor`代理对象，获取时需要传递本次处理消息所属消息管道的名称（`MessagePipe Name`）。

**部分源码：**

```java title="MessageProcessorManager.java"
//...
/**
  * Get {@link MessageProcessor} instance from {@link #processorMap}
  *
  * @param pipeName message pipe name
  * @return message pipe binding {@link MessageProcessor}
  */
public synchronized MessageProcessor getMessageProcessor(String pipeName) {
  MessageProcessor processor = this.regexGetMessageProcessor(pipeName);
  if (ObjectUtils.isEmpty(processor)) {
    throw new MessagePipeException("Message pipeline: " + pipeName + ", there is no bound MessageProcessor.");
  }
  // get message processor proxy instance
  if (MessageProcessorType.REGEX == processor.processorType() && !this.processorMap.containsKey(pipeName)) {
    MessageProcessor proxyProcessor = MessageProcessorProxy.getProxy(processor.getClass());
    this.processorMap.put(pipeName, proxyProcessor);
    return proxyProcessor;
  }
  return processor;
}

/**
  * Get the message processor matched by the regular expression according to the pipe name
  *
  * @param pipeName Specific message pipe name
  * @return The {@link MessageProcessor} instance
  */
private MessageProcessor regexGetMessageProcessor(String pipeName) {
  Iterator<String> iterator = this.processorMap.keySet().iterator();
  while (iterator.hasNext()) {
    String pipeNamePattern = iterator.next();
    boolean isMatch = Pattern.compile(pipeNamePattern).matcher(pipeName).matches();
    if (isMatch) {
      return this.processorMap.get(pipeNamePattern);
    }
  }
  return null;
}
//...
```



### 3.4 注册到服务端

客户端需要注册到服务端后才可以接收分发的消息，我们可以通过`@EnableMessagePipeClient`注解来配置注册到服务端的方式以及自动化注册所需相关类的Bean实例到IOC容器，如下所示：

```java
@Configuration
@EnableMessagePipeClient(serverType = ServerServiceType.NACOS)
public class MessagePipeClientConfiguration {
	//...
}
```

:::tip

`serverType`不是必填的参数，默认为`GRPC`。

:::

#### 3.4.1 注册方式

`@EnableMessagePipeClient`注解会引入`RegistrarServiceSelector`类，该类会根据`serverType`参数值来选择实例化`RegistrarService`接口实现类的实例。

服务端支持两种方式注册客户端：

- **GRPC**：通过`grpc-netty`长连接注册，会实例化`GRpcRegistrarService`类并注册到IOC容器，该类实现了客户端注册、心跳等方法。
- **NACOS**：向`nacos`注册`ServiceName=message-pipe-client-services`的服务，并且将客户端支持的`全部消息管道名称`写入到服务实例元数据中，元数据Key为`bindingPipeNames`。

#### 3.4.2 Nacos方式注册示例

```java title="MessagePipeClientConfiguration.java"
@Configuration
@EnableMessagePipeClient(serverType = ServerServiceType.NACOS)
public class MessagePipeClientConfiguration {
    private NacosConfigProperties nacosConfigProperties;

    public MessagePipeClientConfiguration(NacosConfigProperties nacosConfigProperties) {
        this.nacosConfigProperties = nacosConfigProperties;
    }

    /**
     * 配置{@link NamingService}服务实例
     *
     * @return The {@link NamingService} instance
     * @throws NacosException
     */
    @Bean
    public NamingService namingService() throws NacosException {
        Properties properties = new Properties();
        properties.put(PropertyKeyConst.USERNAME, nacosConfigProperties.getUsername());
        properties.put(PropertyKeyConst.PASSWORD, nacosConfigProperties.getPassword());
        properties.put(PropertyKeyConst.SERVER_ADDR, nacosConfigProperties.getServerAddr());
        if (!ObjectUtils.isEmpty(nacosConfigProperties.getNamespace())) {
            properties.put(PropertyKeyConst.NAMESPACE, nacosConfigProperties.getNamespace());
        }
        return NacosFactory.createNamingService(properties);
    }
```

:::tip

`NacosConfigProperties`属性类是由`nacos`依赖提供的，我们可以直接使用该属性类的配置值来构建`NamingService`对象实例。

:::

### 3.5 可配置的参数

`ApiBoot`集成`MessagePipe`客户端后，提供名为`MessagePipeClientProperties`的配置属性类，通过该类可以完全配置客户端的参数。

```yaml title="application.yml"
api:
  boot:
    message:
      pipe:
        client:
          configuration:
            server-address: localhost
            server-port: 5200
            local-port: 5201
            retry-register-times: 3
            retry-register-interval-milli-seconds: 1000
            heart-beat-interval-seconds: 10
```

- `server-address`：配置注册到服务端的地址，默认为：localhost
- `server-port`：配置注册到服务端的端口号，默认为：5200
- `local-port`：注册到服务端的本地客户端端口号，默认为：5201
- `retry-register-times`：重试次数，注册失败时触发，默认为：3次
- `retry-register-interval-milli-seconds`：重试间隔，单位：毫秒，默认为：1000毫秒
- `heart-beat-interval-seconds`：向服务端发送心跳的间隔，单位：秒，默认：10秒

### 3.6 消息处理原理分析

**消息处理流程：**

1. `ReceiveMessageService`接收服务端分发的消息，`MessageRequestBody`对象携带参数如下：
   1. `requestId`：本次分发消息的请求编号，该编号是全局唯一的
   2. `clientId`：当前客户端在服务端的唯一编号
   3. `pipeName`：本次处理消息所属的消息管道名称
   4. `message`：本次处理的消息实例
2. 通过pipeName参数根据`MessageProcessorManager#getMessageProcessor`方法获取匹配的消息处理器（`MessageProcessor`）实例，如果消息处理器`#processorType`方法返回值为`MessageProcessorType#REGEX`则会使用`Cglib代理`该消息处理器的实例并返回
3. 调用`MessageProcessor#processing`方法处理消息
4. 响应处理状态给服务端，SUCCESS、ERROR

## 4. 服务端

### 4.1 添加依赖

```xml
<dependency>
  <groupId>org.minbox.framework</groupId>
  <artifactId>api-boot-starter-message-pipe-server</artifactId>
</dependency>
```

:::tip
如果未添加`ApiBoot`版本依赖，请访问[版本依赖](/docs/out-box/version-rely)查看添加方式。
:::

### 4.2 消息管道

消息管道（`MessagePipe`）基于`RBlockingQueue`阻塞队列实现，每个消息管道都有一个名称并且是具有唯一性的，根据名称我们可以获取到消息管道实例并向消息管道写入消息，消息的处理以及写入基于`RLock`加锁实现，所以它在**分布式场景下也是线程安全的**。

:::tip

无论是消息写入还是处理都是按照顺序进行的，很像是一个会流动的数据管道，`消息管道`也是因此得名。

:::

- **消息写入**：新的消息写入队列后，会存储到最后一个位置。
- **消息处理**：永远从队列的第一个消息开始处理。

### 4.3 消息管道管理器

消息管道管理器（`MessagePipeManager`），顾名思义是用来管理`MessagePipe`消息管道对象实例的类，我们通过`MessagePipeManager`可以创建新的消息管道，也可以从内存集合中根据名称获取消息管道实例，以便于向指定管道写入新消息。

#### 4.3.1 创建消息管道

通过`MessagePipeManager#createMessagePipe`方法我们可以创建一个新的消息管道，如下所示：

```java title="MessagePipeManagerTest.java"
@SpringBootTest(classes = MessagePipeServerApplication.class)
public class MessagePipeManagerTest {
    @Autowired
    private MessagePipeManager manager;

    @Test
    public void createMessagePipe() {
        MessagePipe messagePipe = manager.createMessagePipe("example");
        byte[] content = "hello, message pipe.".getBytes();
        Message message = new Message(content);
        messagePipe.putLast(message);
    }
}
```

`MessagePipeManager`接口实现类实例会项目启动时自动注册到IOC容器内，这个要归功于`@EnableMessagePipeServer`注解，注册Bean源码可以查看`org.minbox.framework.message.pipe.spring.annotation.server.MessagePipeServerImportBeanDefinitionRegistrar#registerBeanDefinitions`方法。

**消息管道创建成功后在控制台会输出日志信息**：

```
AbstractMessagePipeManager : Create new message pipe example,current number of cached is 0, max limit is 100.
AbstractMessagePipeManager : MessagePipe：example，created successfully and cached.
AbstractMessagePipeManager : MessagePipe：example，distributor create successfully.
AbstractMessagePipeManager : MessagePipe：example，monitor create successfully.
AbstractMessagePipeManager : MessagePipe：example，scheduler create successfully.
```

我们只是调用了`#createMessagePipe`方法而已，为什么会输出这么多日志呢？

#### 4.3.2 了解消息管道创建过程

我们通过查看`AbstractMessagePipeManager#createMessagePipe`源码可以得知，创建消息管道需要经过如下几个步骤：

1. 检查消息管道名称是否满足配置的排除正则表达式（`excludePipeNamePatterns`）的条件
2. 检查指定名称的消息管道是否已经创建了
3. 判断是否超出了允许创建的数量 上限，默认为：100
4. 创建MessagePipe实例并缓存到线程安全的内存集合，输出日志：`created successfully and cached`
5. 实例化该消息管道的消息分发器（`MessagePipeDistributor`），输出日志：`distributor create successfully`
6. 实例化消息管道消息监控器（`MessagePipeMonitor`）并**启动守护线程**，输出日志：`monitor create successfully`
7. 实例化消息调度器（`MessagePipeScheduler`）并**启动守护线程**，输出日志：`scheduler create successfully`

### 4.4 消息管道加载器

消息管道`MessagePipe`实例是由`MessagePipeManager`基于内存方式来维护管理的，如果一旦服务端的服务重启了，这时之前缓存的已创建实例就会丢失。

针对这个问题，消息管道加载器（`MessagePipeLoader`）诞生了，它可以在项目启动时从`Redis`中加载全部的消息管道，消息管道在Redis内`Key`的格式为：`{MessagePipeName}.queue`，如：`example.queue`。

`MessagePipeLoader`部分源码如下所示：

```java title="MessagePipeLoader.java"
//...
/**
 * Load the message pipeline list in Redis
 */
private void loadPipes() {
  String allKeyPattern = LockNames.MESSAGE_QUEUE.format(ALL_PATTERN);
  Set keySet = redisTemplate.keys(allKeyPattern);
  if (ObjectUtils.isEmpty(keySet)) {
    return;
  }
  log.info("Loading message pipes from redis，size：{}.", keySet.size());
  Iterator iterator = keySet.iterator();
  while (iterator.hasNext()) {
    try {
      String pipeKey = String.valueOf(iterator.next());
      Pattern pipeKeyPattern = Pattern.compile(PIPE_NAME_PATTERN);
      Matcher matcher = pipeKeyPattern.matcher(pipeKey);
      if (matcher.find()) {
        String pipeName = matcher.group(1);
        messagePipeManager.createMessagePipe(pipeName);
      }
    } catch (Exception e) {
      log.error(e.getMessage(), e);
    }
  }
}
//...
```

通过`RedisTemplate#keys()`方法从`Redis`内加载匹配正则表达式：`*.queue`的全部`Key`，遍历`Key`列表挨个调用`MessagePipeManager#createMessagePipe`方法进行创建消息管道并缓存到内存集合，这个操作跟服务端正常运行中调用`#createMessagePipe`创建新`MessagePipe`效果一样。

:::caution

`#keys()`方法比较特殊在调用之前需要将`KeySerializer`设置为`StringRedisSerializer`才能够生效，这一设置`MessagePipeLoader`已经做了处理。

:::

加载日志如下所示：

```
MessagePipeLoader    : Loading message pipes from redis，size：1.
```



### 4.5 消息管道监控器

消息管道监控器（`MessagePipeMonitor`）是用来做什么的呢？

虽然正常一条消息写入到消息管道后会**立即执行调度并分发**到客户端，但是也时常会有一些特殊情况存在，比如：客户端可能离线或者重启了处于不可用状态。

不仅如此，如果消息管道**写入的频次不高**并且**有历史数据存在**，这时`MessagePipeMonitor`就起到了重要作用，`MessagePipeMonitor`会定时处理消息管道内的数据并调度分发，默认10秒执行一次。

:::tip

每一个`MessagePipe`创建时都会对应创建`MessagePipeMonitor`，届时会启动一个守护线程，守护线程会跟着消息管道一直运行，直到消息管道最后一次处理消息的时间与执行过期清理的时间差大于配置阈值（`cleanupExpiredMessagePipeThresholdSeconds`）时才会停止。

:::

### 4.6 客户端注册方式

服务端提供了两种客户端接入的方式，分别是：`GRPC`、`Nacos Service`。

#### 4.6.1 GRPC方式注册

`GRPC`是一个长连接的`Netty`封装框架，由`Google`发起并开源，[GRPC GitHub](https://github.com/grpc/grpc)。

`服务端`对`GRPC`的使用进行了封装，提供了`#register`、`#heartbeat`两个方法，源码位于`org.minbox.framework.message.pipe.server.service.GRpcServerApplicationService`。

**启用GRPC方式注册客户端如下：**

```java
@Configuration
@EnableMessagePipeServer
public class MessagePipeServerConfiguration {
    //...
}
```

我们只需要添加`@EnableMessagePipeServer`注解即可，因为服务启动类型`#serverType`参数默认就是`ServerServiceType#GRPC`。

#### 4.6.2 Nacos方式注册

`服务端`对`Nacos`服务列表的`EventListener`进行了封装，订阅了`ServiceName=message-pipe-client-services`的`NamingEvent`事件监听器，一旦触发证明`message-pipe-client-services`服务列表发生了变动，届时服务端会发布`ServiceEventType#RESET_INSTANCE`类型的服务事件（`ServiceEvent`）来重置客户端列表，源码位于`org.minbox.framework.message.pipe.server.service.NacosServerApplicationService`。

部分源码如下所示：

```java title="NacosServerApplicationService.java"
//...
@Override
public void onEvent(Event event) {
    if (!(event instanceof NamingEvent)) {
        return;
    }
    NamingEvent namingEvent = (NamingEvent) event;
    // Publish ServiceChangeEvent
    List<Instance> instances = namingEvent.getInstances();
    List<ClientInformation> clients = instances.stream()
            .filter(instance -> instance.getMetadata().containsKey(PipeConstants.PIPE_NAMES_METADATA_KEY))
            .map(instance -> ClientInformation.valueOf(instance.getIp(), instance.getPort(),
                    instance.getMetadata().get(PipeConstants.PIPE_NAMES_METADATA_KEY)))
            .collect(Collectors.toList());

    if (!ObjectUtils.isEmpty(clients)) {
        ServiceEvent serviceEvent = new ServiceEvent(this, ServiceEventType.RESET_INSTANCE, clients);
        applicationEventPublisher.publishEvent(serviceEvent);
    }
}
//...
```

:::info 服务事件

对于`ServiceEvent`有兴趣可以查看下源码，该事件依赖于`ApplicationContext`发布，以解耦的方式处理客户端服务动态，事件类型目前有：

- REGISTER：注册一个新的客户端服务，仅用于`GRPC`方式
- HEART_BEAT：收到客户端发送的心跳，仅用于`GRPC`方式
- RESET_INSTANCE：重置服务列表，仅用于`Nacos`方式
- EXPIRE：默认每间隔5秒检查一次客户端是否过期，仅用于`GRPC`方式

查看 [ServiceEventType](https://github.com/minbox-projects/message-pipe/blob/master/message-pipe-server/src/main/java/org/minbox/framework/message/pipe/server/service/ServiceEventType.java) 源码。

:::

**启用Nacos方式注册客户端如下所示：**

```java title="MessagePipeServerConfiguration.java"
@Configuration
@EnableMessagePipeServer(serverType = ServerServiceType.NACOS)
public class MessagePipeServerConfiguration {
    private NacosConfigProperties nacosConfigProperties;

    public MessagePipeServerConfiguration(NacosConfigProperties nacosConfigProperties) {
        this.nacosConfigProperties = nacosConfigProperties;
    }

    /**
     * 配置{@link NamingService}服务实例
     *
     * @return The {@link NamingService} instance
     * @throws NacosException
     */
    @Bean
    public NamingService namingService() throws NacosException {
        Properties properties = new Properties();
        properties.put(PropertyKeyConst.USERNAME, nacosConfigProperties.getUsername());
        properties.put(PropertyKeyConst.PASSWORD, nacosConfigProperties.getPassword());
        properties.put(PropertyKeyConst.SERVER_ADDR, nacosConfigProperties.getServerAddr());
        if (!ObjectUtils.isEmpty(nacosConfigProperties.getNamespace())) {
            properties.put(PropertyKeyConst.NAMESPACE, nacosConfigProperties.getNamespace());
        }
        return NacosFactory.createNamingService(properties);
    }
}
```



### 4.7 负载均衡分发消息

#### 4.7.1 消息分发流程

1. 监测写入新的消息后消息管道的调度器（`MessagePipeScheduler`）线程会被唤醒
2. 调用`#peek()`方法获取消息管道内第一条消息（调用`#peek()`方法不会将消息从管道删除）
3. 将消息交给消息管道消息分发器（`MessagePipeDistributor`）
4. 通过`ServiceDiscovery#checkHaveHealthClient`方法检查指定消息管道是否有健康的客户端实例
5. 如果存在有效的客户端实例则通过`ServiceDiscovery#lookup`方法，以负载均衡策略获取其中一个健康的客户端实例
6. 执行向客户端发送消息并等待响应
7. 客户端响应消息处理成功后调用`#poll()`方法删除本次处理消息管道内的第一条消息

#### 4.7.2 默认的负载均衡策略

`服务端`目前提供了一种默认的策略：`RandomWeightedStrategy`，这是最基础的一种方式，没有权重的概念只是随机选择，源码如下所示：

```java title="RandomWeightedStrategy.java"
/**
 * The {@link ClientLoadBalanceStrategy} random strategy
 *
 * @author 恒宇少年
 * @see ClientLoadBalanceStrategy
 */
public class RandomWeightedStrategy implements ClientLoadBalanceStrategy {

    /**
     * lookup client load-balanced address {@link LoadBalanceNode#getClient()}
     * Lookup according to random weight admin address
     * get firstKey by {@link SortedMap#tailMap(Object)}
     *
     * @param clients message pipe bind clients
     * @return Load-balanced {@link ClientInformation}
     * @throws MessagePipeException message pipe exception
     */
    @Override
    public ClientInformation lookup(List<ClientInformation> clients) throws MessagePipeException {
        TreeMap<Double, LoadBalanceNode> nodes = new TreeMap();
        List<LoadBalanceNode> loadBalanceNodes =
                clients.stream().map(client -> new LoadBalanceNode(client)).collect(Collectors.toList());
        loadBalanceNodes.stream().forEach(node -> {
            double lastWeight = nodes.size() == 0 ? 0 : nodes.lastKey().doubleValue();
            nodes.put(node.getInitWeight() + lastWeight, node);
        });
        Double randomWeight = nodes.lastKey() * Math.random();
        SortedMap<Double, LoadBalanceNode> tailMap = nodes.tailMap(randomWeight, false);
        if (ObjectUtils.isEmpty(tailMap)) {
            throw new MessagePipeException("No load balancing node was found");
        }
        return nodes.get(tailMap.firstKey()).getClient();
    }
}
```



#### 4.7.3 自定义负载均衡策略

通过设置`MessagePipeConfiguration#loadBalanceStrategy`字段的值可以实现自定义负载均衡策略，`ApiBoot`对配置`MessagePipeConfiguration`提供了快捷配置类`MessagePipeConfigurationCustomizer`。

如果你想自定义负载均衡策略可以通过实现`ClientLoadBalanceStrategy`接口来编写然后使用`MessagePipeConfigurationCustomizer`配置下即可，如下所示：

```java
/**
 * 定义权重负载均衡策略
 */
@Configuration
public static class WeightLoadBalanceStrategy implements ClientLoadBalanceStrategy {
  @Override
  public ClientInformation lookup(List<ClientInformation> list) throws MessagePipeException {
    // TODO 实现负载策略业务逻辑
    //...
    return null;
  }
}

/**
 * 配置自定义的负载均衡策略
 * @param weightLoadBalanceStrategy {@link WeightLoadBalanceStrategy}
 * @return
 */
@Bean
public MessagePipeConfigurationCustomizer customizerLoadBalanceStrategy(WeightLoadBalanceStrategy weightLoadBalanceStrategy) {
  return new MessagePipeConfigurationCustomizer() {
    @Override
    public void customize(MessagePipeConfiguration configuration) {
      configuration.setLoadBalanceStrategy(weightLoadBalanceStrategy);
    }
  };
}
```



### 4.8 定时清理过期消息管道

`AbstractMessagePipeManager`类被实例化后会启动一个定时线程来监控消息管道的处理情况，如果消息管道长时间未有消息处理，超过一定阈值（默认为30分钟）后则会被自动清理掉，被清理的消息管道将失去一下的特权：

- 停止消息调度守护线程
- 停止消息监控守护线程
- 从内存集合中移除

:::tip

`过期清理`只是为了节省服务器资源，虽然消息管道被执行了过期清理，但是不影响如果有新消息写入管道后再次创建消息管道`MessagePipe`实例并重新拥有相关特权。

:::

如果你想自定义检查过期的时间间隔以及过期阈值，如下所示：

```yaml title="application.yml"
api:
  boot:
    message:
      pipe:
        server:
          configuration:
            # 配置每次检查过期的间隔，单位：秒，默认为10秒
            cleanup-expired-message-pipe-interval-seconds: 10
            # 配置过期时间阈值，消息管道最后处理时间与检查时间差一旦超过该值就会被执行清理，单位：秒，默认为1800秒（30分钟）
            cleanup-expired-message-pipe-threshold-seconds: 1800
```



### 4.9 配置监听端口号

服务端端口号默认为`5200`，可以通过以下参数配置：

```yaml title="application.yml"
api:
  boot:
    message:
      pipe:
        server:
          configuration:
            # 服务端端口号，默认为5200
            server-port: 5200
```

:::caution

端口号如果更换，客户端连接服务端的配置也需要对应更换。

:::

### 4.10 配置消息管道上限数量

消息管道的创建数量是有上限的，默认为：100，如果`MessagePipeManager`所管理的消息管道数量达到上限，调用`MessagePipeManager#createMessagePipe`方法则无法再创建`MessagePipe`，如果修改调整上限值，可以通过以下参数配置：

```yaml title="application.yml"
api:
  boot:
    message:
      pipe:
        server:
          configuration:
            # 配置创建MessagePipe的最大数量上限，默认为：1000
            max-message-pipe-count: 1000
```

:::tip

消息管道的上限数量尽量根据业务体量来配置，尽管一个消息管道占用的服务器资源微乎其微，但还需要考虑服务器资源是否够用。

:::

### 4.11 自定义消息转发请求编号

请求编号可以用来重复检查或者其他用途，服务端提供了基于[minbox-sequence](https://github.com/minbox-projects/minbox-sequence)编写的默认请求编号生成器`RequestIdSequenceGenerator`，如果想要自定义可以通过以下方式；

```java
/**
 * UUID方式生成请求编号
 */
@Configuration
public class UUIDRequestIdGenerator implements RequestIdGenerator {
  @Override
  public String generate() {
    return UUID.randomUUID().toString();
  }
}

@Bean
public MessagePipeConfigurationCustomizer customizerUUIDRequestIdGenerator(UUIDRequestIdGenerator uuidRequestIdGenerator) {
  return new MessagePipeConfigurationCustomizer() {
    @Override
    public void customize(MessagePipeConfiguration configuration) {
      configuration.setRequestIdGenerator(uuidRequestIdGenerator);
    }
  };
}
```

:::tip

由于`MessagePipeConfiguration`内的字段都可以使用`MessagePipeConfigurationCustomizer`配置，所以允许创建多个`MessagePipeConfigurationCustomizer`实例，`ApiBoot`在使用该配置的时候会注入`List<MessagePipeConfigurationCustomizer>`

:::

### 4.12 自定义异常处理器

如果服务端在分发消息时遇到了异常则会调用`ExceptionHandler#handleException`方法，服务端提供了默认的控制台打印错误的`ConsoleExceptionHandler`，如果需要自定义可以通过以下方式：

```java
/**
 * 自定义错误消息写入RabbitMQ消息队列
 */
@Configuration
public class WriteToRabbitMQExceptionHandler implements ExceptionHandler {
  @Override
  public void handleException(Exception exception, MessageProcessStatus status, Message message) {
    // TODO 将错误消息写入RabbitMQ
  }
}

@Bean
public MessagePipeConfigurationCustomizer customizerExceptionHandler(WriteToRabbitMQExceptionHandler writeToRabbitMQExceptionHandler) {
  return new MessagePipeConfigurationCustomizer() {
    @Override
    public void customize(MessagePipeConfiguration configuration) {
      configuration.setExceptionHandler(writeToRabbitMQExceptionHandler);
    }
  };
}
```



## 5. 快速上手

## 6. 常见问题

### 6.1 Docker部署无法注册到服务端

### 6.2 Nacos方式依赖问题