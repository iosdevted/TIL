(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{417:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rxswift-observeon-vs-subscribeon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxswift-observeon-vs-subscribeon"}},[t._v("#")]),t._v(" [RxSwift] observeOn vs subscribeOn")]),t._v(" "),a("p",[t._v("There are two main operators that work with schedulers, observeOn and subscribeOn.")]),t._v(" "),a("p",[t._v("If you want to perform work on a different scheduler just use observeOn(scheduler) operator.")]),t._v(" "),a("p",[t._v("You would usually use observeOn a lot more often than subscribeOn.")]),t._v(" "),a("p",[t._v("In case observeOn isn't explicitly specified, work will be performed on whichever thread/scheduler elements are generated.")]),t._v(" "),a("p",[t._v("If you want to perform work on a different scheduler just use observeOn(scheduler)operator.")]),t._v(" "),a("p",[t._v("If you want to start sequence generation (subscribe method) and call dispose on a specific scheduler, use subscribeOn(scheduler).")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// observeOn과 subscribeOn을 사용한 예제")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Observable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMainThread"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCompleted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Disposables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MainScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConcurrentDispatchQueueScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("background"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" el "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\t    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onNext '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMainThread"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onDisposed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dispose '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMainThread"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\tonNext 1 true\n\tonNext 2 true\n\tHi false\n\tdispose true\n*/")]),t._v("\n")])])]),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 네트워킹으로 받아온 데이터로 background에서 observable을 생성하고")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// observable이 방출하는 element들은 main에서 처리하는 코드")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. observable을 선언. 아직 subscribe가 되지 않아 생성되진 않은 상태.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" todoObservable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Observable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NetworkService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadTodoList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntodoObservable\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. observable을 background에서 생성.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConcurrentDispatchQueueScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 이후부터는 main에서 처리하도록 함.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MainScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" todoList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Todo: '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("todoList"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disposed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" disposeBag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[t._v("#")]),t._v(" Scheduler")]),t._v(" "),a("h3",{attrs:{id:"mainscheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainscheduler"}},[t._v("#")]),t._v(" MainScheduler")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("메인 쓰레드에서 가장 위에 존재(UI와 high-priority tasks를 진행 ,,, heavy task는 피해야함(API request등)")])]),t._v(" "),a("li",[a("p",[t._v("UI를 갱신하려면 이 스케줄러로 변경하여 사용")])])]),t._v(" "),a("h3",{attrs:{id:"serialdispatchqueuescheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serialdispatchqueuescheduler"}},[t._v("#")]),t._v(" SerialDispatchQueueScheduler")]),t._v(" "),a("ul",[a("li",[t._v("background에서 추출하는 일을 처리할 때 사용 (Firebase를 사용할 때 서버의 endpoint에 너무 많은 pressured을 줄일 수 있음)")])]),t._v(" "),a("h3",{attrs:{id:"concurrentdispatchqueuescheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrentdispatchqueuescheduler"}},[t._v("#")]),t._v(" ConcurrentDispatchQueueScheduler")]),t._v(" "),a("ul",[a("li",[t._v("SerialDispatchQueueScheduler와 같이 추출하는 일을 처리할 때 사용, 단 병렬적\n(작업량이 많은 일에 사용)")])]),t._v(" "),a("h3",{attrs:{id:"testscheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testscheduler"}},[t._v("#")]),t._v(" TestScheduler")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("테스트를 위한 것이며, production code에는 사용하지 않음")])]),t._v(" "),a("li",[a("p",[t._v("RxTeat 라이브러리에 존재")])])]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://rx-marin.com/post/observeon-vs-subscribeon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("observeOn vs. subscribeOn"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://sweepty.medium.com/rxswift-scheduler-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-f2e26aeb829d",target:"_blank",rel:"noopener noreferrer"}},[t._v("[RxSwift] Scheduler 제대로 알아보기"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ReactiveX/RxSwift/blob/main/Documentation/Schedulers.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactiveX/RxSwift"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);