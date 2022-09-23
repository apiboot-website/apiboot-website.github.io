---
sidebar_position: 1
title: 快速开始
keywords: [ApiBoot, SpringBoot, 恒宇少年]
---

构建ApiBoot应用程序只需要三步。

## 1. 创建SpringBoot项目

创建`SpringBoot`项目有多种，简单介绍两种方式：

- `https://start.spring.io/`
- `idea开发工具创建Spring Initializr项目`
- ...

## 2. 添加ApiBoot版本控制

`SpringBoot`项目创建完成我们需要添加`ApiBoot`的版本控制，这样我们就可以像`SpringBoot`、`SpringCloud`在添加依赖时不用配置`version`，有利于我们做版本统一维护。

`ApiBoot`版本依赖需要添加在`pom.xml`配置文件内，如下所示：

```xml title="pom.xml"
<!--ApiBoot 版本依赖-->
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.minbox.framework</groupId>
      <artifactId>api-boot-dependencies</artifactId>
      <version>{lastVersion}</version>
      <scope>import</scope>
      <type>pom</type>
    </dependency>
  </dependencies>
</dependencyManagement>
```
Maven仓库最新版本：[![](https://img.shields.io/maven-central/v/org.minbox.framework/api-boot.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:org.minbox.framework)

:::tip 
将{lastVersion}替换成Maven仓库最新版本。
如果获取不到Maven最新版本，请访问[search.maven.org](https://search.maven.org/search?q=a:api-boot-dependencies) 查询。
:::

到这里我们就已经完成了`ApiBoot`的基础集成，是不是特别简单？

## 3. 开箱即用

那接下来就根据具体的需求来选择使用`ApiBoot`提供的封装依赖了，比如你需要集成`swagger`文档，那么就可以添加如下依赖到`pom.xml`文件内：

```xml title="pom.xml"
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <!--ApiBoot Swagger-->
  <dependency>
    <groupId>org.minbox.framework</groupId>
    <artifactId>api-boot-starter-swagger</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>
```

依赖添加完成后根据具体的`组件使用文档`来进行配置参数以及接口实现等。
