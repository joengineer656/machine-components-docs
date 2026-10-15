// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Machine Components & Mechanisms',
  tagline: 'Every motion is circles and bars — BAU Mechatronics reference',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: 'https://joengineer656.github.io',
  baseUrl: '/machine-components-docs/',
  organizationName: 'joengineer656',
  projectName: 'machine-components-docs',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  stylesheets: [
    {href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;700&family=Amiri:wght@400;700&display=swap', type: 'text/css'},
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6sYCgvhNT6Y',
      crossorigin: 'anonymous',
    },
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexDocs: true, indexPages: true, language: ['en']},
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {respectPrefersColorScheme: false, defaultMode: 'light', disableSwitch: true},
      navbar: {
        title: 'Machine Components',
        logo: {alt: 'Four-bar mark', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'courseSidebar', position: 'left', label: 'Chapters'},
          {to: '/docs/formulas', label: 'Formulas', position: 'left'},
          {to: '/docs/checks', label: 'Checks', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'Chapters', items: [
            {label: 'Mechanisms', to: '/docs/ch01-mechanisms'},
            {label: 'Synthesis', to: '/docs/ch05-synthesis'},
            {label: 'Cams', to: '/docs/ch09-cams'},
            {label: 'Gears', to: '/docs/ch10-gears'},
          ]},
          {title: 'Reference', items: [
            {label: 'Formula sheet', to: '/docs/formulas'},
            {label: 'Instructor checks', to: '/docs/checks'},
          ]},
        ],
        copyright: `Machine Components & Mechanisms — BAU Mechatronics student reference.`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.github},
    }),
};

export default config;
