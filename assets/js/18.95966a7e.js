(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{704:function(t,a,s){"use strict";s.r(a);var r=s(81),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql其他知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql其他知识"}},[t._v("#")]),t._v(" MySQL其他知识")]),t._v(" "),a("h2",{attrs:{id:"疑问总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑问总结"}},[t._v("#")]),t._v(" 疑问总结")]),t._v(" "),a("h3",{attrs:{id:"为什么尽量不要使用长事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么尽量不要使用长事务"}},[t._v("#")]),t._v(" 为什么尽量不要使用长事务")]),t._v(" "),a("ol",[a("li",[t._v("长事务意味着系统里面会存在很老的事务视图，在这个事务提交之前，回滚记录都要保留，这会导致大量占用存储空间。")]),t._v(" "),a("li",[t._v("长事务还占用锁资源，可能会拖垮库。")])]),t._v(" "),a("h3",{attrs:{id:"为什么mysql的索引要使用b-树而不是其它树形结构-比如b树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么mysql的索引要使用b-树而不是其它树形结构-比如b树"}},[t._v("#")]),t._v(" 为什么MySQL的索引要使用B+树而不是其它树形结构?比如B树？")]),t._v(" "),a("p",[t._v("因为B树不管叶子节点还是非叶子节点，都会保存数据，这样导致在非叶子节点中能保存的指针数量变少，指针少的情况下要保存大量数据，只能增加树的高度，导致IO操作变多，查询性能变低；")]),t._v(" "),a("h3",{attrs:{id:"主键是否需要设置为自增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主键是否需要设置为自增"}},[t._v("#")]),t._v(" 主键是否需要设置为自增?")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("如果主键是随机的，那么写入数据时很可能会导致数据页频繁分裂，从而导致写入效率低和页空间浪费。")])]),t._v(" "),a("li",[a("p",[t._v("而如果设置主键是自增，那么每一次都是在聚集索引的最后增加，当一页写满，就会自动开辟一个新页，不会有聚集索引树分裂这一步，效率会比随机主键高很多。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);