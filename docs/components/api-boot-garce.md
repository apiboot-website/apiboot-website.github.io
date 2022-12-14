---
title: Grace业务操作日志组件
sidebar_position: 1
---
# 使用Grace优雅的记录业务操作日志

Grace`[ɡreɪs]`是一款业务操作日志记录框架，该框架是`minbox-projects`开源组织孵化出的，`ApiBoot`对该框架进行了自动化集成，让我们使用更优雅方式来记录有效的、可读性高的操作日志。

`Grace`可以实现自动化记录业务操作日志，可以灵活运用参数、方法返回值作为构建操作日志内容的变量，也可以全局配置自定义变量，我们只需要关注每个业务方法的操作日志表达式模版配置即可，一旦配置模版确定，`Grace`会自动根据对应变量格式化日志内容。

GitHub源码：[minbox-projects/grace](https://github.com/minbox-projects/grace)

## 1. 使用场景

- 统一记录操作日志
- 不同业务方法记录不同的操作日志
- 记录可分组、可打标签的操作日志

## 2. 组件依赖

```xml
<dependency>
  <groupId>org.minbox.framework</groupId>
  <artifactId>api-boot-starter-grace</artifactId>
</dependency>
```

:::tip
如果未添加`ApiBoot`版本依赖，请访问[版本依赖](/docs/out-box/version-rely)查看添加方式。
:::

## 3. @GraceRecorder

记录日志主要是依靠`@GraceRecorder`注解来配置，该注解只能在方法上使用。

`@GraceRecorder`注解的属性定义如下所示：

- `success`：目标方法成功执行后所使用的日志模板，支持使用`SpEL`表达式方式配置
- `fail`：目标方法执行失败后所使用的文本
- `condition`：判定是否执行记录操作日志，支持使用`SpEL`表达式方式配置
- `bizNo`：业务编号，支持使用`SpEL`表达式方式配置
- `operator`：操作日志所关联的操作人，支持使用`SpEL`表达式方式配置
- `category`：日志分组，可用于对操作日志进行归类
- `tags`：标签列表（`v1.0.1`引入），允许自定义多个标签来划分操作日志

:::tip

`SpEL`表达式使用模板定义前后缀的方式，只有在`{}`内的字符串才会被解析，更多`SpEL`表达式使用详见：[官方文档](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions)

:::

**@GraceRecorder注解使用示例：**

```java title="Example：TestController.java"
@RestController
public class TestController {
    @Autowired
    private TestService testService;

    @GetMapping
    @GraceRecorder(success = "用户：{#name}，编号：{#userId} 访问了首页.", category = "example")
    public String index(String name, String userId) {
        name = testService.getUserName(userId);
        testService.getUserList(userId);
        return "Hello, " + name;
    }
}
```

```bash
# 访问测试地址
curl -X GET http://localhost:8080/example\?name\=hengboy\&userId\=1
```



**生成的操作日志：**

```json
{
    "category": "example", 
    "content": "用户：hengboy，编号：1 访问了首页.", 
    "executionSucceed": true, 
    "generatedLocation": "org.minbox.grace.exmaple.ExampleController#index", 
    "tags": [
        ""
    ], 
    "time": "2022-09-27T22:41:14.791478000"
}
```



## 4. 自定义存储操作日志

操作日志根据`AOP`切面解析完成后会调用`org.minbox.framework.grace.processor.GraceLogStorageProcessor#storage`方法进行后续的数据存储处理，

需要实现`GraceLogStorageProcessor`接口来自定义进行日志的存储。

```java
@Service
@Slf4j
public class GraceLogStorageProcessorService implements GraceLogStorageProcessor {
    @Override
    public void storage(GraceLogObject graceLogObject) {
        log.info("位置：{}，日志内容：{}", graceLogObject.getGeneratedLocation(), graceLogObject.getContent());
    }
}
```



## 5. 配置全局操作人

如果项目中使用了认证框架，比如：`SpringSecurity`、`OAuth2`，一般会线程安全的存储登录人的相关信息，如果我们再在`@GraceRecorder`注解内重复配置`operator`就显得太过于繁琐。

针对这种情况`Grace`提供了全局配置操作人的接口`GraceLoadOperatorService`，我们只需要实现该接口即可，优先级要低于`@GraceRecorder#operator`。

```java title="Example：GlobalOperatorService.java"
/**
 * 配置全局操作人信息
 * <p>
 * 可以整合SpringSecurity + OAuth2、JWT或自定义的认证方式来获取用户登录信息
 *
 * @author 恒宇少年
 */
@Service
public class GlobalOperatorService implements GraceLoadOperatorService {
    /**
     * 根据全局登录信息返回用户名
     */
    @Override
    public String getOperatorName() {
        return "恒宇少年";
    }

    /**
     * 根据全局登录信息返回用户编号
     */
    @Override
    public String getOperatorId() {
        return "hengboy";
    }

    /**
     * 返回全局用户的其他扩展数据
     * <p>
     * 扩展数据可直接作为构建操作日志的参数使用
     */
    @Override
    public Map<String, Object> getExtra() {
        Map<String, Object> extraMap = new HashMap<>();
        // 可以直接使用{#age}
        extraMap.put("age", 18);
        return extraMap;
    }
}
```

:::tip

`getExtra`方法的返回值会写入到表达式解析上下文变量集合内，可以直接用于`SpEL`表达式的解析变量，如age变量就可以直接作为格式化操作日志的内容（`success`）或者条件（`condition`）使用。

:::

**配置后生成的操作日志如下：**

```json
{
    "category": "example", 
    "content": "用户：hengboy，编号：1 访问了首页.", 
    "executionSucceed": true, 
    "generatedLocation": "org.minbox.grace.exmaple.ExampleController#index", 
    "operator": "恒宇少年", 
    "operatorId": "hengboy", 
    "tags": [
        ""
    ], 
    "time": "2022-09-27T22:42:55.333241000"
}
```

我们通过`GraceLoadOperatorService`实现类配置的全局操作人名称（OperatorName -> operator）、操作人编号（operatorId）已经自动写入到生成的操作日志对象中。

## 6. 使用目标方法参数生成日志

方法参数是格式化`SpEL`表达式数据的重要来源，可以使用方法的全部参数作为格式化日志的变量。

**基本类型(byte/short/int/long/String)的使用：**

```java
@GraceRecorder(category = "User", success = "用户：{#userId} 密码更新完成，更新后的密码：{#newPassword}.")
public void changePwd(String userId, String newPassword) {
  // ...
}
```

**封装类型使用：**

```java
@GraceRecorder(category = "User", success = "用户：{#request.userId} 密码更新完成，更新后的密码：{#request.newPassword}.")
public void changePwd(ChangeUserPwdRequest request){
  // ...
}
```

**Map类型使用：**

请求参数：`http://127.0.0.1:8080/changePassword?userId=123456&newPassword=111111`

```java
@GetMapping("/changePassword")
@GraceRecorder(category = "Test", success = "修改用户：{#map.get('userId')}的密码，改后为：{#map.get('newPassword')}")
public String useMap(@RequestParam HashMap<String, Object> map) {
  return "The password changed.";
}
```

:::tip

JDK1.8及以前的版本反射时无法获取源码参数的名称，可以通过`#p?`的格式化来获取参数对应值，其中`?`为参数的索引，从0开始，如：`#p0.get('userId')`、`#p0.userId`。

:::

## 7. 使用自定义变量生成日志

如果格式化日志所需要的变量不是参数也不是返回值，这时我们需要自定义变量并加入到格式化日志的变量集合内，如下所示：

```java
@GraceRecorder(category = "User", success = "用户：{#request.userId} 密码由{#oldPassword}改为{#request.newPassword}")
public void changePassword(ChangeUserPwdRequest request) {
  GraceVariableContext.setVariable("oldPassword", "admin123");
  // ...
}
```

`GraceVariableContext`内是一个多线程副本的`HashMap`集合，如果相同Key的变量设置多次会被覆盖使用最后一次设置的值。

## 8. 使用Spring Bean定义的函数

`SpEL`表达式支持通过`@bean`的方式来访问`IOC`容器内注册的Bean实例，也可以直接访问Bean定义的方法，如下所示：

```java title="UserService.java"
@Service
public class UserService {
  public String getUserRealName(String userId) {
    return "恒宇少年";
  }
}
```

```java
@GetMapping("/changePassword")
  @GraceRecorder(category = "Test", success = "修改用户：{@userService.getUserRealName(#map.get('userId'))}的密码，改后为：{#map.get('newPassword')}")
  public String useMap(@RequestParam HashMap<String, Object> map) {
  return "The password changed.";
}
```



格式：`@ + Bean名称`，如果没有特殊处理使用注解注册到`IOC`容器内的Bean名称首字母都为小写，所以`@userService`就代表了`UserService`类的Bean实例。

## 9. @GraceFunctionDefiner & @GraceFunction

:::danger

表达式函数必须是`static`修饰的方法才可以定义，如果不是`static`在访问时会报错，主要是因为反射调用方法时如果不是静态的需要方法所属类的实例才可以。

:::

### 9.1 配置function-scan-base-packages

```yaml title="application.yml"
api:
  boot:
    grace:
      function-scan-base-packages:
        - "org.minbox.grace.exmaple.tools"
```

### 9.2 定义GraceFunction静态函数

```java
@GraceFunctionDefiner
public class StringUtils {
    @GraceFunction
    public static String reverseString(String input) {
        StringBuilder backwards = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            backwards.append(input.charAt(input.length() - 1 - i));
        }
        return backwards.toString();
    }
}
```

`@GraceFunctionDefiner`注解只是起到了一个过滤表达式函数定义的作用，只要使用该注解的类才可以执行进一步解析表达式函数的逻辑。

`@GraceFunction`注解则是标识方法为表达式函数，`ExpressionFunctionFactory`在实例化后会把表达式函数缓存到内存集合中，在解析操作日志的`SpEL`表达式时进行注册使用。

### 9.3 使用GraceFunction静态函数

```java
@GetMapping(value = "/reverse")
@GraceRecorder(success = "字符串：{#originalString}，反转后：{#reverseString(#originalString)}", category = "example")
public String reverseString(String originalString) {
  return "字符串：" + originalString + "，反转成功.";
}
```

通过`{#reverseString(#originalString)}`表达式来调用`StringUtils#reverseString()`静态函数，而`#originalString`则是参数值，直接将`originalString`参数值作为反转的源字符串传递给`#reverseString`方法。

**生成的操作日志内容：**

```json
{
    "category": "example", 
    "content": "字符串：hengboy，反转后：yobgneh", 
    "executionSucceed": true, 
    "generatedLocation": "org.minbox.grace.exmaple.ExampleController#reverseString", 
    "operator": "恒宇少年", 
    "operatorId": "hengboy", 
    "tags": [
        ""
    ], 
    "time": "2022-09-27T22:38:14.705727000"
}
```



## 10. 使用目标方法返回值生成日志

每次执行`@GraceRecorder`配置的方法时，AOP拦截器都会在目标方法执行完成后将结果添加到上下文的变量集合内，使用`result`作为Key，如果我们需要使用返回值的内容来格式化日志可以直接使用`#result`来访问数据。

```java
@GraceRecorder(category = "User", success = "用户：{#userId} 查询到的昵称为：{#result}")
public String getUserRealName(String userId) {
  return "恒宇少年";
}

@GraceRecorder(category = "User", success = "用户：{#userId}，年龄：{#result.age}")
public User getUserById(String userId) {
  return new User();
}

@Data
public static class User {
  private String userId;
  private String userName;
  private int age;
}
```



## 11. 根据条件判断是否生成日志

`@GraceRecorder`注解有个`condition`条件属性，支持`SpEL`表达式配置。

```java
@GraceRecorder(category = "User", condition = "{#age>20 and #age<60}", success = "用户：{@userService.getUserRealName(#userId)}，年龄超过{#age}")
public void updateAgeById(String userId, int age) {
  System.out.println(age);
}
```

:::danger

如果配置了该属性，只有表达式解析结果为`true`时才会记录操作日志。

:::
