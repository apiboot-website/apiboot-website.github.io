---
title: MyBatis增强扩展代码生成插件
sidebar_position: 6
---

# Mybatis Enhance 专属打造的代码生成器

`Mybatis Enhance Codegen`是一款`maven plugin`插件，在项目编译时运行，可把控`是否执行生成逻辑`、可根据自己的需求`过滤表名`生成，表名根据`like`语法匹配，完美搭配`Mybatis Enhance`使用，可自动生成`数据实体`、`动态查询实体`，不再为实体类映射表信息字段而犯愁、浪费个人精力。



## 添加插件

```xml
<build>
  <plugins>
    //...
    <plugin>
      <groupId>org.minbox.framework</groupId>
      <artifactId>api-boot-mybatis-enhance-maven-codegen</artifactId>
      <version>2.3.8</version>
      <executions>
        <execution>
          <goals>
            <goal>generator</goal>
          </goals>
        </execution>
      </executions>
      <configuration>
        <execute>true</execute>
        <dbName>xxx</dbName>
        <dbUrl>jdbc:mysql://localhost:3306</dbUrl>
        <dbUserName>root</dbUserName>
        <dbPassword>123456</dbPassword>
        <packageName>org.minbox.framework.api.boot.sample</packageName>
        <!--Lombok Configs-->
        <appendLombokAccessorsChain>true</appendLombokAccessorsChain>
        <appendLombokData>true</appendLombokData>
        <!--ssh代理配置-->
        <enableSshProxy>true</enableSshProxy>
        <!--会将192.168.1.111:3306端口代理绑定到127.0.0.1:3306-->
        <sshProxySetting>
          <serverIp>192.168.1.111</serverIp>
          <username>developer</username>
        </sshProxySetting>
        <typeMappings>
          <typeMapping>
            <jdbcType>timestamp</jdbcType>
            <javaType>LocalDateTime</javaType>
          </typeMapping>
          ...
        </typeMappings>
        <tableNamePattern>kl%</tableNamePattern>
        <ignoreColumnPrefix>false</ignoreColumnPrefix>
        <tables>
        	<table>user</table>
        </tables>
      </configuration>
    </plugin>
    //...
  </plugins>
</build>
```

## 相关配置参数

| 参数名                               | 默认值          | 描述                                                         |
| ------------------------------------ | --------------- | ------------------------------------------------------------ |
| `execute`                            | false           | `Codegen`是否执行                                            |
| `dbName`                             | -               | 数据库名称                                                   |
| `dbUrl`                              | -               | 数据库连接路径（排除数据库名称）                             |
| `dbUserName`                         | -               | 连接数据库用户名                                             |
| `dbPassword`                         | -               | 连接数据库密码                                               |
| `packageName`                        | -               | 生成后实体类的package                                        |
| appendLombokAccessorsChain           | false           | 生成的实体类是否添加`@Accessors(chain = true)`注解           |
| appendLombokData                     | false           | 生成的实体类是否添加`@Data`注解                              |
| enableSshProxy                       | false           | 是否启用ssh代理方式连接数据库                                |
| sshProxySetting.serverIp             | -               | ssh代理的目标IP地址                                          |
| sshProxySetting.forwardTargetPort    | 3306            | ssh代理的目标端口号，默认为3306                              |
| sshProxySetting.username             | -               | 登录ssh代理服务器的用户名                                    |
| sshProxySetting.authenticationMethod | SSH_PRIVATE_KEY | ssh代理授权方式，默认使用公钥秘钥方式。<br />SSH_PRIVATE_KEY：公钥秘钥方式<br />USERNAME_PASSWORD：用户名密码方式 |
| sshProxySetting.sshPort              | 22              | 登录ssh代理服务器的open-ssh端口号                            |
| sshProxySetting.keyType              | rsa             | ssh公钥秘钥类型                                              |
| sshProxySetting.localPort            | 3306            | 代理到本地的端口号，默认为3306                               |
| `tableNamePattern`                   | %               | 表名过滤表达式，向like语法一样使用，默认匹配数据库内全部表   |

:::tip

代码生成连接数据的`sshProxy`内部其实使用了`ApiBoot SshAgent`，更多的使用方式可以查看[SSH安全通道端口代理转发组件](/docs/components/api-boot-ssh-agent)

:::

## 执行生成

`Codegen`是在编译项目时执行，编译项目我们可以通过如下方式执行：

1. 在项目根目录执行`mvn compile`
2. 通过IDEA工具自带的`Maven->Lifecycle->compile`窗口双击进行编译项目
3. 通过IDEA工具自带的`Maven->Plugins->api-boot-mybatis-enhancecodegen:generator`窗口双击进行执行`Codegen`

编译过程中，控制台会进行输出自动生成表的日志信息，如下所示：

```bash title="控制台日志"
......
[INFO] <<< api-boot-mybatis-enhance-maven-codegen:2.3.9-SNAPSHOT:generator (default) < compile @ simulation-common <<<
[INFO] 
[INFO] 
# 开启ssh代理通道
[INFO] --- api-boot-mybatis-enhance-maven-codegen:2.3.9-SNAPSHOT:generator (default) @ simulation-common ---
[INFO] Connection to the remote server [192.168.1.111] is successful.
[INFO] Port forwarding binding is completed, local port : 3306, forward IP: 127.0.0.1, forward port : 3306
# 输出本次将要参与生成的表名列表
[INFO] The entity class corresponding to the 1 tables will be generated，and the table name list: ["simulation_job"]
[INFO] 
[INFO] ----------------< Start Generating simulation_job(模拟任务) >----------------
[INFO] Get information is complete, time consuming 2119 ms.
[INFO] Generated class [com/test/entity/SimulationJob.java] at 2022-09-26T15:19:08.579626
[INFO] Generated class [com/test/entity/dsl/DSimulationJob.java] at 2022-09-26T15:19:08.585777
# 关闭ssh代理通道
[INFO] SSH Connection disconnected successfully
......
```

`Codegen`会把根据`tableNamePattern`查询到的表名进行输出，并且每个表会自动执行`实体类`、`动态查询实体`创建。

## 生成的实体类

**实体类命名**

生成的实体类的命名规则是表名`驼峰`后的格式，示例如下所示：

```java
package org.minbox.framework.api.boot.sample;

import com.gitee.hengboy.mybatis.enhance.common.annotation.Column;
import com.gitee.hengboy.mybatis.enhance.common.annotation.Id;
import com.gitee.hengboy.mybatis.enhance.common.annotation.Table;
import com.gitee.hengboy.mybatis.enhance.common.enums.KeyGeneratorTypeEnum;
import lombok.Data;

import java.sql.Timestamp;

/**
 * 文章信息表
 * @author ApiBoot Mybatis Enhance Codegen
 */
@Data
@Table(name = "kl_article_info")
public class KlArticleInfo {

    /**
     * 主键自增
     */
    @Id(generatorType = KeyGeneratorTypeEnum.UUID)
    @Column(name = "AI_ID")
    private String aiId;
    /**
     * 文章所属用户
     */
    @Column(name = "AI_USER_ID")
    private String aiUserId;
    /**
     * 文章标题
     */
    @Column(name = "AI_TITLE")
    private String aiTitle;
    /**
     * 阅读量
     */
    @Column(name = "AI_READ_COUNT")
    private Integer aiReadCount;
    /**
     * 喜欢数量
     */
    @Column(name = "AI_LIKE_COUNT")
    private Integer aiLikeCount;
    /**
     * 评论数量
     */
    @Column(name = "AI_COMMENT_COUNT")
    private Integer aiCommentCount;
    /**
     * 分享数量
     */
    @Column(name = "AI_SHARE_COUNT")
    private Integer aiShareCount;
    /**
     * 文章内容
     */
    @Column(name = "AI_CONTENT")
    private String aiContent;
    /**
     * 是否为原创文章，Y：原创，N：转载
     */
    @Column(name = "AI_IS_ORIGINAL")
    private String aiIsOriginal;
    /**
     * 文章是否发布，Y：已发布，N：未发布
     */
    @Column(name = "AI_IS_RELEASE")
    private String aiIsRelease;
    /**
     * 是否热门,Y：热门，N：非热门
     */
    @Column(name = "AI_IS_HOT")
    private String aiIsHot;
    /**
     * 是否置顶，Y：置顶，N：普通
     */
    @Column(name = "AI_IS_TOP")
    private String aiIsTop;
    /**
     * 是否推荐，Y：推荐，N：不推荐
     */
    @Column(name = "AI_IS_RECOMMEND")
    private String aiIsRecommend;
    /**
     * 是否为markdown语法文章
     */
    @Column(name = "AI_IS_MARKDOWN")
    private String aiIsMarkdown;
    /**
     * 发布时间
     */
    @Column(name = "AI_RELEASE_TIME")
    private Timestamp aiReleaseTime;
    /**
     * 文章状态，O：正常，D：已删除
     */
    @Column(name = "AI_STATUS")
    private String aiStatus;
    /**
     * 备注信息
     */
    @Column(name = "AI_MARK")
    private String aiMark;
    /**
     * 文章创建时间
     */
    @Column(name = "AI_CREATE_TIME")
    private Timestamp aiCreateTime;
}
```

`@Id`的主键生成策略，会根据表内主键是否定义了自增来进行判断，如果是自增使用`KeyGeneratorTypeEnum.AUTO`，如果不是则使用`KeyGeneratorTypeEnum.UUID`，如果你项目内是自定义的主键，可以进行修改为`KeyGeneratorTypeEnum.DIY`。

## 生成的动态查询实体

**动态查询实体命名**

动态查询实体的命名规则同样是`驼峰`，不过有个前缀为`D`，上面实体类名称为`KlArticleInfo`对应动态查询实体为`DKlArticleInfo`，生成示例如下所示：

```java
package org.minbox.framework.api.boot.sample;

import com.gitee.hengboy.mybatis.enhance.dsl.expression.ColumnExpression;
import com.gitee.hengboy.mybatis.enhance.dsl.expression.TableExpression;

/**
 * 文章信息表
 * @author ApiBoot Mybatis Enhance Codegen
 */
public class DKlArticleInfo extends TableExpression<KlArticleInfo> {

    public DKlArticleInfo(String root) {
        super(root);
    }

    public static DKlArticleInfo DSL() {
        return new DKlArticleInfo("kl_article_info");
    }

    /**
     * 主键自增
     */
    public ColumnExpression aiId = new ColumnExpression("AI_ID", this);
    /**
     * 文章所属用户
     */
    public ColumnExpression aiUserId = new ColumnExpression("AI_USER_ID", this);
    /**
     * 文章标题
     */
    public ColumnExpression aiTitle = new ColumnExpression("AI_TITLE", this);
    /**
     * 阅读量
     */
    public ColumnExpression aiReadCount = new ColumnExpression("AI_READ_COUNT", this);
    /**
     * 喜欢数量
     */
    public ColumnExpression aiLikeCount = new ColumnExpression("AI_LIKE_COUNT", this);
    /**
     * 评论数量
     */
    public ColumnExpression aiCommentCount = new ColumnExpression("AI_COMMENT_COUNT", this);
    /**
     * 分享数量
     */
    public ColumnExpression aiShareCount = new ColumnExpression("AI_SHARE_COUNT", this);
    /**
     * 文章内容
     */
    public ColumnExpression aiContent = new ColumnExpression("AI_CONTENT", this);
    /**
     * 是否为原创文章，Y：原创，N：转载
     */
    public ColumnExpression aiIsOriginal = new ColumnExpression("AI_IS_ORIGINAL", this);
    /**
     * 文章是否发布，Y：已发布，N：未发布
     */
    public ColumnExpression aiIsRelease = new ColumnExpression("AI_IS_RELEASE", this);
    /**
     * 是否热门,Y：热门，N：非热门
     */
    public ColumnExpression aiIsHot = new ColumnExpression("AI_IS_HOT", this);
    /**
     * 是否置顶，Y：置顶，N：普通
     */
    public ColumnExpression aiIsTop = new ColumnExpression("AI_IS_TOP", this);
    /**
     * 是否推荐，Y：推荐，N：不推荐
     */
    public ColumnExpression aiIsRecommend = new ColumnExpression("AI_IS_RECOMMEND", this);
    /**
     * 是否为markdown语法文章
     */
    public ColumnExpression aiIsMarkdown = new ColumnExpression("AI_IS_MARKDOWN", this);
    /**
     * 发布时间
     */
    public ColumnExpression aiReleaseTime = new ColumnExpression("AI_RELEASE_TIME", this);
    /**
     * 文章状态，O：正常，D：已删除
     */
    public ColumnExpression aiStatus = new ColumnExpression("AI_STATUS", this);
    /**
     * 备注信息
     */
    public ColumnExpression aiMark = new ColumnExpression("AI_MARK", this);
    /**
     * 文章创建时间
     */
    public ColumnExpression aiCreateTime = new ColumnExpression("AI_CREATE_TIME", this);
    @Override
    public ColumnExpression[] getColumns() {
        return new ColumnExpression[]{aiId, aiUserId, aiTitle, aiReadCount, aiLikeCount, aiCommentCount, aiShareCount, aiContent, aiIsOriginal, aiIsRelease, aiIsHot, aiIsTop, aiIsRecommend, aiIsMarkdown, aiReleaseTime, aiStatus, aiMark, aiCreateTime};
    }

}
```



## 实体生成后的位置在哪？

`Codegen`所生成的所有实体都位于项目根目录下的`target/generated-sources/java`下，可以自行复制到业务目录、或者直接使用。

## 使用动态查询实体示例

```java
/**
  * Mybatis Enhance Dsl Factory
  */
@Autowired
private EnhanceDslFactory dslFactory;

/**
  * 根据文章编号查询示例
  *
  * @param articleId 文章编号
  * @return
  */
public KlArticleInfo selectById(String articleId) {
  DKlArticleInfo dKlArticleInfo = DKlArticleInfo.DSL();
  return dslFactory.createSearchable()
    .selectFrom(dKlArticleInfo)
    // 文章主键
    .where(dKlArticleInfo.aiId.eq(articleId))
    // and 状态正常
    .and(dKlArticleInfo.aiStatus.eq("O"))
    .resultType(KlArticleInfo.class)
    .fetchOne();
}
```

