import { createRequire } from 'node:module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'deft-reader',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      {
        text: 'Guide',
        link: '/zh/guide/what-is-deft-reader',
        activeMatch: '/zh/guide/',
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: '',
          },
          {
            text: 'Contributing',
            link: '',
          },
        ],
      },
    ],

    sidebar: {
      '/en/guide': {
        base: '/en/guide/',
        items: [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
              { text: 'What is VitePress?', link: 'what-is-vitepress' },
              { text: 'Getting Started', link: 'getting-started' },
              { text: 'Routing', link: 'routing' },
              { text: 'Deploy', link: 'deploy' },
            ],
          },
          {
            text: 'Writing',
            collapsed: false,
            items: [
              { text: 'Markdown Extensions', link: 'markdown' },
              { text: 'Asset Handling', link: 'asset-handling' },
              { text: 'Frontmatter', link: 'frontmatter' },
              { text: 'Using Vue in Markdown', link: 'using-vue' },
              { text: 'Internationalization', link: 'i18n' },
            ],
          },
          {
            text: 'Customization',
            collapsed: false,
            items: [
              { text: 'Using a Custom Theme', link: 'custom-theme' },
              {
                text: 'Extending the Default Theme',
                link: 'extending-default-theme',
              },
              { text: 'Build-Time Data Loading', link: 'data-loading' },
              { text: 'SSR Compatibility', link: 'ssr-compat' },
              { text: 'Connecting to a CMS', link: 'cms' },
            ],
          },
          {
            text: 'Experimental',
            collapsed: false,
            items: [
              { text: 'MPA Mode', link: 'mpa-mode' },
              { text: 'Sitemap Generation', link: 'sitemap-generation' },
            ],
          },
          {
            text: 'Config & API Reference',
            base: '/reference/',
            link: 'site-config',
          },
        ],
      },
    },

    editLink: {
      pattern: 'https://github.com/baicie/deft-reader/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present ',
    },
  },
})
