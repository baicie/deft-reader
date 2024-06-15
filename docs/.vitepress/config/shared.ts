import { defineConfig } from 'vitepress'
import { search } from './zh'

export const shared = defineConfig({
  title: 'deft-reader',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
  },

  head: [
    // [
    //   "link",
    //   { rel: "icon", type: "image/svg+xml", href: "/vitepress-logo-mini.svg" },
    // ],
    // [
    //   "link",
    //   { rel: "icon", type: "image/png", href: "/vitepress-logo-mini.png" },
    // ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'deft-reader',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'deft-reader' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/baicie/deft-reader' },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: ' ',
        apiKey: ' ',
        indexName: 'deft-reader',
        locales: { ...search },
      },
    },
  },
})
