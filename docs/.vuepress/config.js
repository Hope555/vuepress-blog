module.exports = {
  title: 'WOW',
  description: 'Just playing around',
  base: '/wow-blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      ['/guide/', '首页'],
      ['/guide/restore', '反和谐'],
      ['/guide/macro', '宏命令'],
    ],
  },
}