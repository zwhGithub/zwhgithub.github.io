(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{707:function(a,t,s){"use strict";s.r(t);var e=s(81),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"koa源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa源码分析"}},[a._v("#")]),a._v(" Koa源码分析")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0060lm7Tly1g5lhk3t75ej30ig07vdh7.jpg",alt:"image-20180528181625044"}})]),a._v(" "),t("h2",{attrs:{id:"_1-why-koa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-koa"}},[a._v("#")]),a._v(" 1. Why Koa ?")]),a._v(" "),t("blockquote",[t("p",[a._v("koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套， 并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。")])]),a._v(" "),t("ul",[t("li",[a._v("async await写法，让异步更加优雅。（"),t("strong",[a._v("代码是写给人看的，顺便让机器执行而已")]),a._v("）")]),a._v(" "),t("li",[a._v("良好的抽象，简洁的api，简单、吊炸天的中间件机制。")]),a._v(" "),t("li",[a._v("强大的社区，GayHub上数不胜数的中间件。")])]),a._v(" "),t("h2",{attrs:{id:"_2-小试牛刀之源码文件一览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-小试牛刀之源码文件一览"}},[a._v("#")]),a._v(" 2. 小试牛刀之源码文件一览")]),a._v(" "),t("blockquote",[t("p",[a._v("npm上down下koa之后打开koa/lib文件夹可以看到四个文件，足以证明koa框架是多么简洁。（不过koa框架依赖了很多node_modules）")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0060lm7Tly1g5lmg1f76aj30j6086jrp.jpg",alt:"image-20180528181625044"}})]),a._v(" "),t("ul",[t("li",[a._v("application.js 入口文件，也是骨架文件，创建一个服务。")]),a._v(" "),t("li",[a._v("context.js app 的 context 对象, 传入中间件的上下文对象。")]),a._v(" "),t("li",[a._v("request.js app 的请求对象，包含请求相关的一些属性。")]),a._v(" "),t("li",[a._v("response.js app 的响应对象，包含响应相关的一些属性。")])]),a._v(" "),t("h2",{attrs:{id:"_3-具体分析koa源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-具体分析koa源码"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/PiI4PTzUBNLPm2cKd71lyw",target:"_blank",rel:"noopener noreferrer"}},[a._v("3.具体分析koa源码"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);