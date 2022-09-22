(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{702:function(s,t,a){"use strict";a.r(t);var e=a(81),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql两阶段加锁协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql两阶段加锁协议"}},[s._v("#")]),s._v(" MySQL两阶段加锁协议")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("此篇博客主要是讲述MySql(仅限innodb)的两阶段加锁(2PL)协议,而非两阶段提交(2PC)协议,区别如下:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("2PL,两阶段加锁协议:主要用于单机事务中的一致性与隔离性。\n2PC,两阶段提交协议:主要用于分布式事务。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("MySql本身针对性能，还有一个MVCC(多版本控制)控制,本文不考虑此种技术，仅仅考虑MySql本身的加锁协议。")]),s._v(" "),t("h2",{attrs:{id:"什么时候会加锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会加锁"}},[s._v("#")]),s._v(" 什么时候会加锁")]),s._v(" "),t("p",[s._v("在对记录"),t("strong",[s._v("更新操作或者(select for update、lock in share model)时")]),s._v("，会对记录加锁(有共享锁、排它锁、意向锁、gap锁、nextkey锁等等),本文为了简单考虑，不考虑锁的种类。")]),s._v(" "),t("h2",{attrs:{id:"什么是两阶段加锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是两阶段加锁"}},[s._v("#")]),s._v(" 什么是两阶段加锁")]),s._v(" "),t("p",[s._v("在一个事务里面，分为加锁(lock)阶段和解锁(unlock)阶段,也即所有的lock操作都在unlock操作之前,如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105307_MZJc.png",alt:"输入图片说明"}})]),s._v(" "),t("h2",{attrs:{id:"为什么需要两阶段加锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要两阶段加锁"}},[s._v("#")]),s._v(" 为什么需要两阶段加锁")]),s._v(" "),t("p",[s._v("引入2PL是为了保证事务的隔离性，即多个事务在并发的情况下等同于串行的执行。 在数学上证明了如下的封锁定理:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("如果事务是良构的且是两阶段的，那么任何一个合法的调度都是隔离的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("具体的数学推到过程可以参照<<事务处理:概念与技术>>这本书的7.5.8.2节.\n此书乃是关于数据库事务的圣经，无需解释(中文翻译虽然晦涩，也能坚持读下去,强烈推荐)")]),s._v(" "),t("h2",{attrs:{id:"工程实践中的两阶段加锁-s2pl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程实践中的两阶段加锁-s2pl"}},[s._v("#")]),s._v(" 工程实践中的两阶段加锁-S2PL")]),s._v(" "),t("p",[s._v("在实际情况下，SQL是千变万化、条数不定的,数据库很难在事务中判定什么是加锁阶段，什么是解锁阶段。于是引入了S2PL(Strict-2PL),即:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在事务中只有提交(commit)或者回滚(rollback)时才是解锁阶段，\n其余时间为加锁阶段。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105326_2MZl.png",alt:"输入图片说明"}}),s._v("\n这样的话，在实际的数据库中就很容易实现了。")]),s._v(" "),t("h2",{attrs:{id:"两阶段加锁对性能的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两阶段加锁对性能的影响"}},[s._v("#")]),s._v(" 两阶段加锁对性能的影响")]),s._v(" "),t("p",[s._v("上面很好的解释了两阶段加锁，现在我们分析下其对性能的影响。考虑下面两种不同的扣减库存的方案:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 方案1:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 扣减库存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_inventory "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("${id} "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 锁住用户账户表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插入订单记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t_trans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 方案2:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 锁住用户账户表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_user_account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插入订单记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t_trans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 扣减库存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_inventory "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("${id} "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("由于在同一个事务之内，这几条对数据库的操作应该是等价的。但在两阶段加锁下的性能确是有比较大的差距。两者方案的时序如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105344_zOGz.png",alt:"输入图片说明"}})]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("由于库存往往是最重要的热点，是整个系统的瓶颈。那么如果采用第二种方案的话,\ntps应该理论上能够提升3rt/rt=3倍。这还仅仅是业务就只有三条SQL的情况下，\n多一条sql就多一次rt,就多一倍的时间。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("值得注意的是：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在更新到数据库的那个时间点才算锁成功\n提交到数据库的时候才算解锁成功\n这两个round_trip的前半段是不会计算在内的\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105533_ACvC.png",alt:"输入图片说明"}}),s._v("\n当前只考虑网络时延，不考虑数据库和应用本身的时间消耗。")]),s._v(" "),t("h2",{attrs:{id:"依据s2pl的性能优化-重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依据s2pl的性能优化-重要"}},[s._v("#")]),s._v(" 依据S2PL的性能优化 （重要）")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("从上面的例子中,可以看出，需要把最热点的记录，\n放到事务最后，这样可以显著的提高吞吐量。更进一步:\n越热点记录离事务的终点越近(无论是commit还是rollback)\n笔者认为，先后顺序如下图:\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105402_aaLC.png",alt:"输入图片说明"}})]),s._v(" "),t("h3",{attrs:{id:"避免死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免死锁"}},[s._v("#")]),s._v(" 避免死锁")]),s._v(" "),t("p",[s._v("这也是任何SQL加锁不可避免的。上文提到了按照记录Key的热度在事务中倒序排列。\n那么"),t("strong",[s._v("写代码的时候任何可能并发的SQL都必须按照这种顺序来处理，不然会造成死锁")]),s._v("。如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105547_k2qF.png",alt:"输入图片说明"}})]),s._v(" "),t("h3",{attrs:{id:"select-for-update和update-where-谓词计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-for-update和update-where-谓词计算"}},[s._v("#")]),s._v(" select for update和update where 谓词计算")]),s._v(" "),t("p",[s._v("我们可以直接将一些简单的判断逻辑写到update的谓词里面，以减少加锁时间，考虑下面两种方案:\n方案1:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(":\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_inventory "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_inventory "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("方案2:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(":\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_inventory "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ele\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("时延如下图所示:\n"),t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201707/17105419_aMgn.png",alt:"输入图片说明"}}),s._v("\n可以看到，通过在update中加谓词计算，少了1rt的时间。")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("由于update在执行过程中对符合谓词条件的记录加的是和select for update一致的排它锁\n(具体的锁类型较为复杂，不在这里描述),所以两者效果一样。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("直接在where里面进行判断，利用update where的排它锁，能让锁的时间更短。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("MySql采用两阶段加锁协议实现隔离性和一致性，我们只有深入的去理解这种协议，才能更好的对我们的SQL进行优化，增加系统的吞吐量。")])])}),[],!1,null,null,null);t.default=r.exports}}]);