module.exports = {
  theme: '',
  title: 'iyeed',
  description: 'iyeed-前端组件库使用文档教程',
  base: '/',
  port: '8080',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/start.md',
        '/comps/select.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}