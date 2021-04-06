(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{396:function(e,a,i){"use strict";i.r(a);var t=i(42),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"swift-lazy-var-vs-let-when-creating-views-programmatically"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#swift-lazy-var-vs-let-when-creating-views-programmatically"}},[e._v("#")]),e._v(" [Swift] Lazy Var vs Let when creating views programmatically")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://bugs.swift.org/browse/SR-1042",target:"_blank",rel:"noopener noreferrer"}},[e._v('Make "lazy var" threadsafe'),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("Lazy initialization is a concept where initialization (construction) of variable content is delayed until its first usage. First access to such variable triggers initialization. Since content is not created until variable is used (needed) using lazy initialized variables can save resources.")]),e._v(" "),i("p",[e._v("That is primary drive behind lazy initialization. You don't create something until you need it. That is also logic you will use when deciding whether something should be lazy var or not.")]),e._v(" "),i("p",[e._v("If you are dealing with views (or anything else) that are always visible (needed) there is little point in using lazy initialization. On the other hand when you are dealing with instances that are not always needed - then using lazy var is justified.")]),e._v(" "),i("p",[e._v("If your view is always visible in presented view controller, you will not accomplish much by making it lazy. If it is visible only under specific circumstances - for instance when user expands some collapsed panel - then making it lazy makes sense. It will make your view controller load faster and use less memory by default.")]),e._v(" "),i("p",[e._v("As far as thread safety is concerned, lazy var are not thread safe in Swift.")]),e._v(" "),i("p",[e._v("That means if two different threads try to access the same lazy var at the same time, before such variable has been initialized it is possible that one of the threads will access partially constructed instance.")])])}),[],!1,null,null,null);a.default=s.exports}}]);