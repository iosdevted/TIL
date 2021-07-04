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
      // {
      //   title: "Things I've Learned",
      //   children: CONST.TILList
      // },
      {
        title: 'Swift / iOS',
        children: CONST.SwiftList
      }
      // ,{
      //   title: 'SwiftUI',
      //   children: CONST.SwiftUIList
      // }
      ,{
        title: 'iOS Development',
        children: CONST.ViewList
      },{
        title: 'Graphics & Animation',
        children: CONST.GraphicList
      },{
        title: 'Core Concepts',
        children: CONST.CoreList
      },{
        title: 'Architecture Patterns',
        children: CONST.ArchitectureList
      },{
        title: 'Networking',
        children: CONST.NetworkingList
      },{
        title: 'SQL & Data',
        children: CONST.DataList
      },{
        title: 'RxSwift',
        children: CONST.RxswiftList
      },{
        title: 'Unit Test',
        children: CONST.UnitTestList
      },{
        title: 'UI & UX',
        children: CONST.UIUXList
      },
      // {
      //   title: 'CoreML & ARKit',
      //   children: CONST.CoreMLList
      // },
      
      // {
      //   title: 'Algorithm',
      //   children: CONST.AlgorithmList
      // },
      {
        title: 'Map & Location APIs',
        children: CONST.MapList
      },{
        title: 'Git',
        children: CONST.GitList
      },
      {
        title: 'Common Lisp',
        children: CONST.LISPList
      },
      {
        title: 'Université Paris 8',
        children: CONST.UniversityList
      },{
        title: 'Useful Articles',
        children: CONST.ArticlesList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/iosdevted/'
      }, {
        text: 'Blog',
        link: 'https://sunggweon.dev'
      }
    ]
  },
}