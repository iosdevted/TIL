(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{400:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"prepareforreuse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepareforreuse"}},[e._v("#")]),e._v(" prepareForReuse()")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uitableviewcell/1623223-prepareforreuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Document"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://baked-corn.tistory.com/51",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Cell을 재사용할 때 생기는 문제점"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[e._v("#")]),e._v(" Declaration")]),e._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("override")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForReuse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForReuse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("If you have images loading in to your cell and you’re scrolling through fast and your internet connection isn’t the best, "),s("code",[e._v("you’ll start noticing some images are where they shouldn’t be. This is because we are reusing cells")]),e._v(", so the text and images are being rolled over, leading to the wrong images in the wrong cells.")]),e._v(" "),s("p",[e._v("All we need to do to is use the prepareForReuse() function "),s("code",[e._v("in the custom cell")]),e._v(". This function is called before cell reuse, letting you cancel current requests and perform a ‘reset’.")]),e._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//https://github.com/cielgrisdemoscou/ios-project/blob/master/custom-tabs/custom-tabs/Views/TabCell.swift")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("override")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForReuse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepareForReuse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    tabTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n    tabIcon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("nil")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Now your table view scrolling will be smooth (through cell reuse) and incorrect images will not carry over (through prepareForReuse()).")])])}),[],!1,null,null,null);t.default=r.exports}}]);