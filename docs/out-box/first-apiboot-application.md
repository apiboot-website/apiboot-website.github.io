---
title: 第一个ApiBoot应用程序
sidebar_position: 2
---

> 我们使用`ApiBoot`提供的整合`Spring Security`与`Spring OAuth2`的组件来搭建第一个应用程序。

## 1. 创建项目
我们首先使用`IDEA`工具来创建一个SpringBoot项目，当然用什么工具都是可以的。

:::tip
创建的项目基于JDK8版本，如果是JDK11及以上版本则会出现`JAXBException`异常，可以添加相关依赖解决这个异常。
:::

### 1.1 添加组件依赖
```xml title="pom.xml"
//...省略无关的依赖
<dependencies>
    <dependency>
        <groupId>org.minbox.framework</groupId>
        <artifactId>api-boot-starter-security-oauth-jwt</artifactId>
    </dependency>
</dependencies>
<dependencyManagement>
<dependencies>
    <dependency>
        <groupId>org.minbox.framework</groupId>
        <artifactId>api-boot-dependencies</artifactId>
        <version>2.3.8</version>
        <scope>import</scope>
        <type>pom</type>
    </dependency>
</dependencies>
</dependencyManagement>
```
:::tip
上面使用了`ApiBoot` v2.3.8版本，一旦添加了统一版本依赖后，使用`dependency`就需要再定义`<version>`标签了。
:::
### 1.2 参数配置
添加依赖后我们需要在`application.yml`文件中配置下`Spring Security`的用户信息，如下所示：
```yaml title="src/resources/application.yml"
spring:
  main:
    allow-circular-references: true
api:
  boot:
    security:
      users:
        - username: hengboy
          password: 123123
```
:::tip
由于高版本的Spring检查了循环依赖的问题，我们需要额外添加`spring.main.allow-circular-references=true`的配置。
:::
## 2. 示例
到目前为止我们的项目已经实现了集成`Spring Security`、`Spring OAuth2`，一个依赖、极简的配置就解决了问题，这样的ApiBoot你感觉上手简单吗？
### 2.1 获取令牌
**curl方式：**
```bash
⋊> ~ curl -X POST ApiBoot:ApiBootSecret@localhost:8080/oauth/token -d "grant_type=password&username=hengboy&password=123123" | jsonpp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   198    0   146  100    52    891    317 --:--:-- --:--:-- --:--:--  1269
{
  "access_token": "eyHWEBXAKrNBMewKeLAMFwlLvlc",
  "token_type": "bearer",
  "refresh_token": "CipCv5R-zARK994lSP3wIZU5AeA",
  "expires_in": 7185,
  "scope": "api"
}
```

:::tip
`ApiBoot Security OAuth2`默认使用内存方式存储令牌，应用程序一旦重启就会失效，需要重新获取新令牌。
:::

### 2.2 测试接口
首先我们先来添加一个测试接口，地址为：`/api/index`，为了方便我直接在`ApiBootFirstApplication`入口类添加，如下所示：
```java title="ApiBootFirstApplication.java"
@SpringBootApplication
@RestController
public class ApiBootFirstApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiBootFirstApplication.class, args);
    }

  
    @GetMapping("/api/index")
    public String index() {
        return "this is security index";
    }
}
```
:::tip
`ApiBoot Security OAuth2`默认保护`/api/**`地址下的接口，可以通过`api.boot.security.authPrefix`配置参数修改。
:::
### 2.3 携带令牌请求接口
**curl方式：**
```bash
⋊> ~ curl -H 'Authorization: Bearer JyzexbKNAeiz6oiorFYGTwdCI64' http://localhost:8080/api/index
this is security index
```
我们已经可以使用生成的请求令牌访问访问受保护的接口了。