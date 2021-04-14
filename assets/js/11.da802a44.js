(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"singleton-pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#singleton-pattern"}},[t._v("#")]),t._v(" Singleton Pattern")]),t._v(" "),e("p",[t._v("The singleton pattern is a method used when you want to create an object for a specific purpose and use it for common use. Mainly, environment settings, login information are stored in objects created for a specific purpose, and data is used by making them accessible from multiple objects. This object is kept in memory until the program is executed and terminated unless it is arbitrarily freed from memory.")]),t._v(" "),e("p",[t._v("The objects of the singleton pattern mainly used in iOS development are as follows.")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" screen "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIScreen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" userDefaults "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UserDefaults")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("standard\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" application "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fileManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("FileManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" notification "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NotificationCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-to-use-singleton"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-singleton"}},[t._v("#")]),t._v(" When to use Singleton")]),t._v(" "),e("p",[t._v("The singleton pattern is a method in which there is only one specific object in the app, and other objects share the contents of it.")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingletonClass")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shared "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SingletonClass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When defining a class, a type property of the same type as the corresponding class is created inside so that access is possible without creating an object. At this time, it is declared as a static global variable, but since this property is created delayed, it is not stored in memory until the first SingletonClass is created.")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingletonClass")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shared "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SingletonClass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If the singleton object is not intended to be created multiple times, it should be prevented to solve the problem of creating a new object and losing its uniqueness. That way, you can set the class initializer as private to prevent creating another instance from outside.")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://matteomanferdini.com/swift-singleton/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swift Singletons: A Design Pattern to Avoid (With Examples"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://velog.io/@naroti/iOS-%EA%B0%9C%EB%B0%9C-Singleton-Pattern-q4k3uzgf0n",target:"_blank",rel:"noopener noreferrer"}},[t._v("NAROTi - Singleton Pattern"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);