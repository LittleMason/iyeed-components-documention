// const customComponentsPath = resolve(__dirname,'../comps')
// const files = fs.readdirSync(customComponentsPath);
// const sidebar = files.map((item)=>{
//     return `/comps/${item}`
// })
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
      },
      {
        text: 'github',
        link: 'https://github.com/haimalairen/iyeed-components'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/start.md',
        '/comps/transit.md',
        '/comps/topform.md',
        '/comps/tab.md',
        '/comps/draggable.md',
        '/comps/select.md',
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}