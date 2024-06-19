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
        link: '/guide/what-is-deft-reader',
        activeMatch: '/guide/',
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
      '/guide': {
        base: '/guide/',
        items: [
          {
            text: 'Introduction',
            collapsed: false,
            items: [{ text: 'what is', link: 'what-is-deft-reader' }],
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
