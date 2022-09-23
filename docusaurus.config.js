// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ApiBoot',
  tagline: 'ApiBoot™ 基于SpringBoot为快速构建服务而生，提供开箱即用的封装组件，是敏捷开发的首选落地解决方案',
  url: 'https://apiboot2.minbox.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apiboot-groups', // Usually your GitHub org/user name.
  projectName: 'apiboot-website.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'ApiBoot',
          src: 'img/apiboot-colorful.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'out-box/quick-start',
            position: 'right',
            label: '使用文档',
          },
          {to: '/blog', label: '文章教程', position: 'right'},
          {
            href:'https://blog.minbox.org',
            label: '作者博客',
            position: 'right'
          },
          {
            href: 'https://github.com/minbox-projects/api-boot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档 & 教程',
            items: [
              {
                label: '使用文档',
                to: '/docs/out-box/quick-start',
              },
              {
                label: '文章教程',
                to: '/blog',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '问题反馈',
                to: '/docs/introduce/faq',
              }
            ],
          },
          {
            title: '资源',
            items: [
              {
                label: '作者博客',
                href: 'https://blog.minbox.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/minbox-projects/api-boot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ApiBoot, Inc. 恒宇少年.`,
      },
      prism: {
        additionalLanguages: ['java'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
