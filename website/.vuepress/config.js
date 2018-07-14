module.exports = {
  base: '',
  title: 'Snibox',
  description: 'A self-hosted snippet manager',
  head: [
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Snibox' }],
    ['meta', { property: 'og:description', content: 'A self-hosted snippet manager' }],
    ['meta', { property: 'og:image', content: 'https://snibox.github.io/assets/img/logo.png' }],

    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Snibox' }],
    ['meta', { name: 'twitter:description', content: 'A self-hosted snippet manager' }],
    ['meta', { name: 'twitter:image', content: 'https://snibox.github.io/assets/img/logo.png' }],

    ['link', { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icons/apple-touch-icon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/img/apple-touch-icons/apple-touch-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/img/apple-touch-icons/apple-touch-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/img/apple-touch-icons/apple-touch-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/img/apple-touch-icons/apple-touch-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/img/apple-touch-icons/apple-touch-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/img/apple-touch-icons/apple-touch-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/img/apple-touch-icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/apple-touch-icons/apple-touch-icon-180x180.png' }],

    ['link', { rel: 'icon', href: '/assets/img/favicon.png' }]
  ],
  ga: 'UA-122253325-1',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://snibox-demo.herokuapp.com/' },
      { text: 'GitHub', link: 'https://github.com/snibox/snibox/' },
      { text: 'Docs', link: '/docs/' }
    ],
    sidebar: [
      ['/docs/', 'Home'],
      '/docs/authentication',
      '/docs/demo',
      '/docs/deployment',
      '/docs/development'
    ]
  }
}
