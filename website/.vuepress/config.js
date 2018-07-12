module.exports = {
  base: '',
  title: 'Snibox',
  description: 'Self-hosted code snippets manager.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
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
