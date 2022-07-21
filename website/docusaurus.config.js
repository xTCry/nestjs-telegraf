module.exports = {
  title: 'NestJS Telegraf',
  tagline: 'Powerful Nest module for easy and fast creation Telegram bots',
  url: 'https://nestjs-telegraf.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'bukhalo',
  projectName: 'nestjs-telegraf',
  themeConfig: {
    navbar: {
      title: 'NestJS Telegraf',
      items: [
        {
          href: 'https://github.com/bukhalo/nestjs-telegraf',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/bukhalo/nestjs-telegraf/discussions',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/nestjs_telegraf',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/bukhalo/nestjs-telegraf/issues',
            },
            {
              label: 'Examples',
              to: 'https://github.com/bukhalo/nestjs-telegraf/tree/master/sample/',
            }
          ],
        },
      ],
      copyright: `Copyright © 2019 - ${new Date().getFullYear()}, <a target="_blank" href="https://bukhalo.com">Alexander Bukhalo</a>, <a target="_blank" href="mailto:arthur.asimov.z0@gmail.com">Arthur Asimov</a> and <a target="_blank" href="https://github.com/bukhalo/nestjs-telegraf/graphs/contributors">Others</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/bukhalo/nestjs-telegraf/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
