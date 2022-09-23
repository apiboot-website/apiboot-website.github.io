import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '基于SpringBoot',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <code>ApiBoot</code>所提供的组件都基于<code>SpringBoot</code>封装
      </>
    ),
  },
  {
    title: '开箱即用',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          极简配置，甚至部分组件无需配置就可以接入，对<code>SpringBoot</code>简单了解即可提供安全的服务接口
      </>
    ),
  },
  {
    title: '低门槛',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          为Java开发者提供低门槛第三方框架集成方案，让复杂框架的集成变成只需添加依赖、简单配置即可
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
