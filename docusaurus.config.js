// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tdub\'s Homepage',
  tagline: 'Thank you for clicking',

  url: 'https://tdubmorris.github.io',
  baseUrl: '/',

  organizationName: 'TdubMorris',
  projectName: 'tdubmorris.github.io',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tdub\'s Homepage',
        style: 'dark',
        items: [
          {
            to: '/info',
            position: 'left',
            label: 'About',
          },
          {
            type: 'docSidebar',
            sidebarId: 'creationsbar',
            position: 'left',
            label: 'Creations',
          },
          {
            to: 'blog',
            position: 'left',
            label: 'Blog',
          },
          
          {
            label: 'Github',
            href: 'https://github.com/TdubMorris',
            position: 'right'
          },
        ],
        logo: {
          alt: 'TdubMorris Logo',
          src: '/img/ProfilePic.png',
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright &copy; ${new Date().getFullYear()} Toby Morris. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;