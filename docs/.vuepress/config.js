module.exports = {
  title: '河南酷特文化传媒有限公司',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      ['/page/test', '反和谐'],
      // {
      //   title: 'Page',   // 必要的
      //   // path: '/page/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   children: [
      //     'page/',
      //     'page/test',
      //   ]
      // },
    ],
  },
}