module.exports = {
  base: '/vuepress/',
  lang: 'zh',
  head: [
    ['link', {
      rel: 'icon',
      href: '/images/kartjim.png'
    }]
  ],
  title: 'kartjim',
  description: 'blog-VuePress',
  themeConfig: {
    logo: 'https://i.loli.net/2021/08/27/DOn8RchtTUa6yzY.png',
    navbar: [{
        text: 'PHP',
        link: '/php/'
      },
      {
        text: 'Markdown',
        link: '/markdown/'
      },
      {
        text: 'Front-end',
        link: '/front-end/'
      },
      {
        text: 'About',
        link: '/about/'
      }
    ],
    sidebar: [{
        text: 'PHP',
        link: '/php/',
        children: [
          '/php/php01.md',
        ],
      },
      {
        text: 'Markdown',
        link: '/markdown/',
        children: [
          '/markdown/markdown.md',
        ],
      },
      {
        text: '前端',
        link: '/front-end/',
        children: [
          '/front-end/rgba2hsv.md',
        ],
      },
    ],
    tip: '提示',
    warning: '警告',
  }
}
