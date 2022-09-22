(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{733:function(e,s,r){"use strict";r.r(s);var t=r(81),i=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis之刁难问题收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis之刁难问题收集"}},[e._v("#")]),e._v(" Redis之刁难问题收集")]),e._v(" "),s("h2",{attrs:{id:"redis有哪些数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis有哪些数据结构"}},[e._v("#")]),e._v(" Redis有哪些数据结构？")]),e._v(" "),s("p",[e._v("字符串String、字典Hash、列表List、集合Set、有序集合SortedSet。")]),e._v(" "),s("p",[e._v("如果你是Redis中高级用户，还需要加上下面几种数据结构HyperLogLog、Geo、Pub/Sub。")]),e._v(" "),s("p",[e._v("如果你说还玩过Redis Module，像BloomFilter，RedisSearch，Redis-ML，面试官得眼睛就开始发亮了。")]),e._v(" "),s("h2",{attrs:{id:"假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如果将它们全部找出来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如果将它们全部找出来"}},[e._v("#")]),e._v(" 假如Redis里面有1亿个key，其中有10w个key是以某个固定的已知的前缀开头的，如果将它们全部找出来？")]),e._v(" "),s("p",[e._v("使用keys指令可以扫出指定模式的key列表，不过keys在生产环境一般禁止使用，过于浪费性能。")]),e._v(" "),s("p",[e._v("这个时候你要回答redis关键的一个特性：redis的单线程的。keys指令会导致线程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。这个时候可以使用scan指令，scan指令可以无阻塞的提取出指定模式的key列表，但是会有一定的重复概率，在客户端做一次去重就可以了，但是整体所花费的时间会比直接用keys指令长。")]),e._v(" "),s("h2",{attrs:{id:"使用过redis做异步队列么-你是怎么用的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用过redis做异步队列么-你是怎么用的"}},[e._v("#")]),e._v(" 使用过Redis做异步队列么，你是怎么用的？")]),e._v(" "),s("p",[e._v("一般使用list结构作为队列，rpush生产消息，lpop消费消息。当lpop没有消息的时候，要适当sleep一会再重试。")]),e._v(" "),s("p",[e._v("如果对方追问可不可以不用sleep呢？list还有个指令叫blpop，在没有消息的时候，它会阻塞住直到消息到来。")]),e._v(" "),s("p",[e._v("如果对方追问能不能生产一次消费多次呢？使用pub/sub主题订阅者模式，可以实现1:N的消息队列。")]),e._v(" "),s("p",[e._v("如果对方追问pub/sub有什么缺点？在消费者下线的情况下，生产的消息会丢失，得使用专业的消息队列如rabbitmq等。")]),e._v(" "),s("p",[e._v("如果对方追问redis如何实现延时队列？我估计现在你很想把面试官一棒打死如果你手上有一根棒球棍的话，怎么问的这么详细。但是你很克制，然后神态自若的回答道：使用sortedset，拿时间戳作为score，消息内容作为key调用zadd来生产消息，消费者用zrangebyscore指令获取N秒之前的数据轮询进行处理。")]),e._v(" "),s("p",[e._v("到这里，面试官暗地里已经对你竖起了大拇指。但是他不知道的是此刻你却竖起了中指，在椅子背后。")]),e._v(" "),s("h2",{attrs:{id:"如果有大量的key需要设置同一时间过期-一般需要注意什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果有大量的key需要设置同一时间过期-一般需要注意什么"}},[e._v("#")]),e._v(" 如果有大量的key需要设置同一时间过期，一般需要注意什么？")]),e._v(" "),s("p",[e._v("如果大量的key过期时间设置的过于集中，到过期的那个时间点，redis可能会出现短暂的卡顿现象。一般需要在时间上加一个随机值，使得过期时间分散一些。")]),e._v(" "),s("h2",{attrs:{id:"pipeline有什么好处-为什么要用pipeline-管道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipeline有什么好处-为什么要用pipeline-管道"}},[e._v("#")]),e._v(" Pipeline有什么好处，为什么要用pipeline？（管道）")]),e._v(" "),s("p",[e._v("可以将多次IO往返的时间缩减为一次，前提是pipeline执行的指令之间没有因果相关性。使用redis-benchmark进行压测的时候可以发现影响redis的QPS峰值的一个重要因素是pipeline批次指令的数目。")]),e._v(" "),s("h2",{attrs:{id:"是否使用过redis集群-集群的原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否使用过redis集群-集群的原理是什么"}},[e._v("#")]),e._v(" 是否使用过Redis集群，集群的原理是什么？")]),e._v(" "),s("p",[e._v("Redis Sentinal着眼于高可用，在master宕机时会自动将slave提升为master，继续提供服务。")]),e._v(" "),s("p",[e._v("Redis Cluster着眼于扩展性，在单个redis内存不足时，使用Cluster进行分片存储。")]),e._v(" "),s("h2",{attrs:{id:"redis的同步机制了解么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis的同步机制了解么"}},[e._v("#")]),e._v(" Redis的同步机制了解么？")]),e._v(" "),s("p",[e._v("Redis可以使用主从同步，从从同步。第一次同步时，主节点做一次bgsave，并同时将后续修改操作记录到内存buffer，待完成后将rdb文件全量同步到复制节点，复制节点接受完成后将rdb镜像加载到内存。加载完成后，再通知主节点将期间修改的操作记录同步到复制节点进行重放就完成了同步过程。")])])}),[],!1,null,null,null);s.default=i.exports}}]);