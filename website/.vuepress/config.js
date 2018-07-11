module.exports = {
  title: 'Snibox',
  description: 'Self-hosted code snippets manager',
  base: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://snibox-demo.herokuapp.com/' },
      { text: 'Source', link: 'https://github.com/snibox/snibox/' },
      { text: 'Docs', link: '/docs/' }
    ],
    sidebar: [
      ['/docs/', 'Home'],
      '/docs/authentication',
      '/docs/deployment',
      '/docs/development'
    ]
  }
}
