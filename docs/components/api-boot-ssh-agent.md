---
title: SSH安全通道端口代理转发组件
sidebar_position: 1
---

如果运维人员只给你通过SSH公钥的方式授权访问，该服务器并不开放我们需要的服务的端口号时，我们该怎么做才能访问到对应的服务呢？

其实上面的问题我们在平时工作中经常遇到，为了服务的数据安全性考虑，一般不会直接将端口号开放，我们只能通过登录服务器后使用命令才可以进行操作，目前市面上也有很多的工具支持SSH公钥的方式连接，比如：DataGrip、Navicat、Redis Desktop Manager、MongoDB Compass等工具。

那如果我们的本地项目需要连接到远程服务的数据库、Redis或者MongoDB时该怎么去做呢？

GitHub源码：[minbox-projects/ssh-agent](https://github.com/minbox-projects/ssh-agent)

## 1. 使用场景

**SSH-Agent就是来解决这类问题的，主要原理是在本地创建一个端口通过SSH方式登录后与远程服务器的端口号进行绑定，这样我们连接本地的端口号时就可以访问到远程服务器的服务了。**

## 2. 组件依赖

```xml
<dependency>
  <groupId>org.minbox.framework</groupId>
  <artifactId>api-boot-starter-ssh-agent</artifactId>
</dependency>
```
:::tip
如果未添加`ApiBoot`版本依赖，请访问[版本依赖](/docs/out-box/version-rely)查看添加方式。
:::
## 3. 配置参数
在`application.yml/properties`配置文件内的配置前缀为：`api.boot.ssh-agent`，通过`api.boot.ssh-agent.configs`配置多个代理信息，每个代理配置的参数如下表所示：

| 参数名                | 默认值             | 描述                                                         |
| --------------------- | ------------------ | ------------------------------------------------------------ |
| username              | -                  | 配置连接服务器的用户名                                       |
| password              | -                  | 配置连接服务器的密码（仅限密码认证方式）                     |
| authentication-method | SSH_PRIVATE_KEY    | 认证方式，参数值：<br />USERNAME_PASSWORD：用户名密码方式<br />SSH_PRIVATE_KEY：SSH秘钥方式 |
| server-ip             | -                  | 配置连接服务器的IP地址                                       |
| ssh-port              | 22                 | 配置连接服务器的SSH端口号                                    |
| key-type              | rsa                | SSH秘钥加密类型，参数值：<br />rsa：RSA类型加密<br />ed25519：ED25519类型加密 |
| ssh-private-key-path  | ~/.ssh/id_rsa      | SSH方式认证秘钥地址                                          |
| ssh-known-hosts-path  | ~/.ssh/known_hosts | 配置已知主机配置文件地址                                     |
| local-port            | -                  | 本地代理的端口号                                             |
| forward-target-port   | -                  | 配置转发到远程服务器的端口号                                 |
| forward-target-ip     | 127.0.0.1          | 登录后的服务器IP地址，如果是局域网，可以配置内网IP地址       |
| addition              | -                  | jsch认证需要的额外附加参数列表                               |

## 4. 实现原理

`ApiBoot SSH Agent`通过封装`jsch`来实现代理SSH端口，并且与代理端口保持长连接实现数据不间断的转发。

### 4.1 AgentConnection

`AgentConnection`是一个接口，`ssh-agent`提供了该接口的默认实现类`DefaultAgentConnection`，通过实例化`DefaultAgentConnection`就可以实现代理SSH端口，部分源码如下所示：

```java
try {
  AgentConnection connection = new DefaultAgentConnection(config);
  this.connections.add(connection);
  connection.connect();
} catch (Exception e) {
  log.error("Connection：{}:{}，try agent failure.", config.getServerIp(), config.getForwardTargetPort(), e);
}
```

### 4.2 SshAgentServletContextListener

`ApiBoot`对`AgentConnection`进行了封装，通过监听`ServletContextEvent`事件的`ServletContextListener`监听器来实现项目启动成功后根据配置的代理参数进行开启代理SSH通道。

:::tip

不过，通过`SshAgentServletContextListener`有个缺陷！！！

只能正常启动项目时才可以代理SSH端口转发通道，如果我们使用`Junit`来进行单元测试时虽然会启动项目但是并不会触发`ServletContextEvent`事件，因此在执行单元的时候会提示无法连接，针对这个问题请查阅[在junit5中使用](#5-在junit5中使用)

:::

## 5. 认证方式

目前登录服务器的认证方式有两种：

- 用户名 + 密码：直接通过用户名密码的方式登录远程服务器，不需要走SSH
- 用户名 + 秘钥：需要通过SSH连接远程服务器，远程服务器需要配置授权的公钥（默认方式，也建议使用这种，安全系数好高很多）

## 6. 在Junit5中使用

**步骤一：继承SshAgentJunitTest单元测试类**

```java
@SpringBootTest
class SimulationServiceApiApplicationTests extends SshAgentJunitTest {
    @Test
    void contextLoads() {
        //...
    }
}
```

:::tip

在上面代码示例中，单元测试类`SimulationServiceApiApplicationTests`继承自`SshAgentJunitTest`后，在执行`contextLoads()`方法时，执行前会自动**开启**SSH代理连接，执行后会自动**关闭**代理连接。

:::

**步骤二：添加`ssh-agent.yml`配置文件**

`ssh-agent.yml`用于配置ssh代理连接列表，位于`src/test/resources`目录下，如果不创建该配置文件运行单元测试方法时会抛出异常。

```yaml title="ssh-agent.yml"
configs:
  # 代理转发MySQL
  - username: developer
    serverIp: x.x.x.x
    localPort: 3306
    forwardTargetPort: 59500
  # 代理转发Redis
  - username: developer
    serverIp: x.x.x.x
    localPort: 6379
    forwardTargetPort: 59504
  # 代理转发mongo
  - username: developer
    serverIp: x.x.x.x
    localPort: 27017
    forwardTargetPort: 59503
```

## 7. 代理日志

在项目启动时如果在`application.yml/.properties`文件内配置的服务器连接信息没有问题，控制台会输出绑定转发端口成功的日志，如下所示：
```
Port forwarding binding is completed, local port : 3307, forward IP: 127.0.0.1, forward port : 3306
```



## 8. 代理目标局域网端口

有一种情况：管理员给你开通了一个跳板机访问权限，你可以通过ssh方式登录该跳板机，但是你需要访问的具体服务在另外一台或者多台服务器上，具体服务的机器跟跳板机是一个局域网，针对这个情况我们怎么使用`ApiBoot SshAgent`来配置呢？

**假如服务器部署环境如下：**

```
跳板机：192.168.1.100
MySQL服务：192.168.1.101
Redis服务：192.168.1.102
MongoDB服务：192.168.1.103
```

**针对上述服务部署环境，对应的代理配置如下：**

```yaml title="application.yml"
api:
  boot:
    ssh-agent:
      configs:
        # 代理转发MySQL
         # ssh方式登录的跳板机用户名
        - username: developer
          # ssh方式登录的跳板机服务器IP
          server-ip: 192.168.1.100
          # 本地访问代理服务的端口号
          # 代理成功后访问127.0.0.1:3306等于访问192.168.1.101:3306
          local-port: 3306
          # 转发目标的局域网服务IP
          forward-target-ip: 192.168.1.101
          # 转发目标的局域网服务Port
          forward-target-port: 3306
        # 代理转发Redis
        - username: developer
          server-ip: 192.168.1.100
          local-port: 6379
          forward-target-ip: 192.168.1.102
          forward-target-port: 6379
        # 代理转发MongoDB
        - username: developer
          server-ip: 192.168.1.100
          local-port: 27017
          forward-target-ip: 192.168.1.103
          forward-target-port: 27017
```



## 9. 常见问题

### 9.1 JSCH秘钥连接异常

如果第一次使用`ApiBoot SshAgent`控制台输出以下错误信息，证明生成`open-ssh`秘钥的方式有点问题。

```bash
ERROR: Failed to authenticate with public key
com.jcraft.jsch.JSchException: invalid privatekey: [B@5b5361f0
```
针对上述问题，我们只需要重新生成一次`open-ssh`公钥密钥对即可，生成时传递`-m`参数为：`PEM`.

```bash
ssh-keygen -m PEM
```