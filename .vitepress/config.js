import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base :'/DocumentSite-ModelViewer/',
  title: "Model Viewer",
  description: "Doucmentation Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demo/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Issues', link: '/issues/buildErrorWithGltFast' }
    ],

    sidebar: {
      '/demo/': [{
        text: 'Demo',
        items: [
          { text: 'Overview', link: '/demo/index' },
        ]
      }],

      '/guides/': [{
        text: 'Guides',
        items: [
          { text: 'Start', link: '/guides/index' },
          { text: 'Get To Use', link: '/guides/getUsed' },
          { text: 'Configuration', link: '/guides/config' },
        ]
      }],
      
      '/issues/': [{
        text: 'Issues',
        items: [
          { text: 'BuildErrorWithGltfast', link: '/issues/buildErrorWithGltFast' }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
