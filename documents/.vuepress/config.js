var CONST = require("./const");

module.exports = {
  title: `Today I Learned`,
  description: `Sunggwon's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Monthly I Learned',
        children: CONST.MILList
      },{
        title: 'iOS',
        children: CONST.iOSList
      },{
        title: 'Swift',
        children: CONST.SwiftList
      },{
        title: 'Daily Coding',
        children: CONST.DailyCodingList
      },{
        title: 'UIImage',
        children: CONST.UIImageList
      },{
        title: 'Design',
        children: CONST.DesignList
      },{
        title: 'Git',
        children: CONST.GitList
      },{
        title: 'LISP',
        children: CONST.LISPList
      }, {
        title: 'ETC',
        children: CONST.ETCList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/cielgrisdemoscou/'
      }, {
        text: 'Blog',
        link: 'https://sunggweon.dev'
      }
    ]
  },
}