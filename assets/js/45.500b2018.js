(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{731:function(s,a,t){"use strict";t.r(a);var r=t(81),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis之数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis之数据结构"}},[s._v("#")]),s._v(" Redis之数据结构")]),s._v(" "),a("blockquote",[a("p",[s._v("Redis有5个基本数据结构，string、list、hash、set和zset。它们是日常开发中使用频率非常高应用最为广泛的数据结构，把这5个数据结构都吃透了，你就掌握了Redis应用知识的一半了。")])]),s._v(" "),a("h2",{attrs:{id:"hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[s._v("#")]),s._v(" hash")]),s._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/23/164c4eaf9edf608d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),s._v(" "),a("p",[s._v("哈希等价于Java语言的HashMap或者是Python语言的dict，在实现结构上它使用二维结构，"),a("strong",[s._v("第一维是数组，第二维是链表")]),s._v("，hash的内容key和value存放在链表中，数组里存放的是链表的头指针。")]),s._v(" "),a("p",[s._v("通过key查找元素时，先计算key的hashcode，然后用hashcode对数组的长度进行取模定位到链表的表头，再对链表进行遍历获取到相应的value值，链表的作用就是用来将产生了"),a("strong",[s._v("hash碰撞")]),s._v("的元素串起来。")]),s._v(" "),a("p",[s._v("Java语言开发者会感到非常熟悉，因为这样的结构和HashMap是没有区别的。哈希的第一维数组的长度也是2^n。")]),s._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/23/164c4dcd14c00534?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),s._v(" "),a("h3",{attrs:{id:"扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩容"}},[s._v("#")]),s._v(" 扩容")]),s._v(" "),a("p",[a("strong",[s._v("当hash内部的元素比较拥挤时(hash碰撞比较频繁)，就需要进行扩容。")])]),s._v(" "),a("p",[s._v("扩容需要申请新的两倍大小的数组，然后将所有的键值对重新分配到新的数组下标对应的链表中(rehash)。")]),s._v(" "),a("p",[s._v("如果hash结构很大，比如有上百万个键值对，那么一次完整rehash的过程就会耗时很长。这对于单线程的Redis里来说有点压力山大。")]),s._v(" "),a("p",[s._v("所以Redis采用了渐进式rehash的方案。它会同时保留两个新旧hash结构，在后续的定时任务以及hash结构的读写指令中将旧结构的元素逐渐迁移到新的结构中。这样就可以避免因扩容导致的线程卡顿现象。")]),s._v(" "),a("h3",{attrs:{id:"缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩容"}},[s._v("#")]),s._v(" 缩容")]),s._v(" "),a("p",[s._v("Redis的hash结构不但有扩容还有缩容，从这一点出发，它要比Java的HashMap要厉害一些，Java的HashMap只有扩容。缩容的原理和扩容是一致的，只不过新的数组大小要比旧数组小一倍。")]),s._v(" "),a("h2",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" string")]),s._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/22/164c182f83ceb3b5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),s._v(" "),a("p",[s._v("首先我们从string谈起。string表示的是一个可变的字节数组，我们初始化字符串的内容、可以拿到字符串的长度，可以获取string的子串，可以覆盖string的子串内容，可以追加子串。")]),s._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/24/164caaff402d2617?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),s._v(" "),a("p",[s._v("Redis的字符串是动态字符串，是可以修改的字符串，内部结构实现上类似于Java的ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配，\n如图中所示，内部为当前字符串实际分配的空间capacity一般要高于实际字符串长度len。")]),s._v(" "),a("p",[s._v("当字符串长度小于1M时，扩容都是加倍现有的空间，如果超过1M，扩容时一次只会多扩1M的空间。需要注意的是字符串最大长度为512M。")])])}),[],!1,null,null,null);a.default=e.exports}}]);