import{_ as l,o as i,c as t,R as a,aO as T,aP as e,aQ as p,aR as o,aS as r,aT as P,aU as s}from"./chunks/framework.8tK3KIzN.js";const _=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{},"headers":[],"relativePath":"web/network.md","filePath":"web/network.md","lastUpdated":1683274969000}'),S={name:"web/network.md"},h=a('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h1><h2 id="post和get的区别" tabindex="-1">POST和GET的区别 <a class="header-anchor" href="#post和get的区别" aria-label="Permalink to &quot;POST和GET的区别&quot;">​</a></h2><ul><li>GET在浏览器回退时是无害的，而POST会再次提交请求</li><li>GET产生的URL地址可以被收藏，而POST不可以</li><li>GET请求会被浏览器主动缓存，而POST不会，除非手动设置</li><li>GET请求只能进行url编码，而POST支持多种编码方式</li><li>GET请求参数会被完整的保留在浏览器历史记录里，而POST参数不会被保留</li><li>GET请求在URL中传送的参数是有长度限制里，而POST没有限制</li><li>对参数的数据类型，GET只接受ASCII字符，而POST没有限制</li><li>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息</li><li>GET参数通过URL传递，POST放在Request body上</li></ul><p>Post 和 Get 是 HTTP 请求的两种方法，其区别如下：</p><ul><li>应用场景：GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。而 Post不是一个幂等的请求，一般用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。</li><li>是否缓存：因为两者应用场景不同，浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。</li><li>发送的报文格式：Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。</li><li>安全性：Get 请求可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说是不太安全的，因为请求的 url 会被保留在历史记录中。</li><li>请求长度：浏览器由于对 url 长度的限制，所以会影响 get 请求发送数据时的长度。这个限制是浏览器规定的，并不是 RFC 规定的。</li><li>参数类型：post 的参数传递支持更多的数据类型。</li></ul><h2 id="post-和-put-请求的区别" tabindex="-1">POST 和 PUT 请求的区别 <a class="header-anchor" href="#post-和-put-请求的区别" aria-label="Permalink to &quot;POST 和 PUT 请求的区别&quot;">​</a></h2><ul><li>PUT 请求是向服务器端发送数据，从而修改数据的内容，但是不会增加数据的种类等，也就是说无论进行多少次 PUT 操作，其结果并没有不同。（可以理解为时更新数据）</li><li>POST 请求是向服务器端发送数据，该请求会改变数据的种类等资源，它会创建新的内容。（可以理解为是创建数据）</li></ul><h2 id="常见的-http-请求头和响应头" tabindex="-1">常见的 HTTP 请求头和响应头 <a class="header-anchor" href="#常见的-http-请求头和响应头" aria-label="Permalink to &quot;常见的 HTTP 请求头和响应头&quot;">​</a></h2><ul><li>HTTP Request Header 常见的请求头：</li><li>Accept:浏览器能够处理的内容类型</li><li>Accept-Charset:浏览器能够显示的字符集</li><li>Accept-Encoding：浏览器能够处理的压缩编码</li><li>Accept-Language：浏览器当前设置的语言</li><li>Connection：浏览器与服务器之间连接的类型</li><li>Cookie：当前页面设置的任何 Cookie</li><li>Host：发出请求的页面所在的域</li><li>Referer：发出请求的页面的 URL</li><li>User-Agent：浏览器的用户代理字符串</li><li>HTTP Responses Header 常见的响应头：</li><li>Date：表示消息发送的时间，时间的描述格式由 rfc822 定义</li><li>server:服务器名称</li><li>Connection：浏览器与服务器之间连接的类型</li><li>Cache-Control：控制 HTTP 缓存</li><li>content-type:表示后面的文档属于什么 MIME 类型</li></ul><p>常见的 Content-Type 属性值有以下四种：</p><ol><li>application/x-www-form-urlencoded：浏览器的原生 form 表单，如果不设置enctype属性，那么最终就会以application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&amp;key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。</li><li>multipart/form-data：该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。</li><li>application/json：服务器消息主体是序列化后的 JSON 字符串。</li><li>text/xml：该种方式主要用来提交 XML 格式的数据</li></ol><h2 id="常见的-http-请求方法" tabindex="-1">常见的 HTTP 请求方法 <a class="header-anchor" href="#常见的-http-请求方法" aria-label="Permalink to &quot;常见的 HTTP 请求方法&quot;">​</a></h2><ul><li>GET: 向服务器获取数据</li><li>POST：将实体提交到指定的资源，通常会造成服务器资源的修改；</li><li>PUT：上传文件，更新数据；</li><li>DELETE：删除服务器上的对象；</li><li>HEAD：获取报文首部，与 GET 相比，不返回报文主体部分；</li><li>OPTIONS：询问支持的请求方法，用来跨域请求；</li><li>CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行 TCP通信；</li><li>TRACE: 回显服务器收到的请求，主要⽤于测试或诊断。</li></ul><h2 id="http-1-1-和-http-2-0-的区别" tabindex="-1">HTTP 1.1 和 HTTP 2.0 的区别 <a class="header-anchor" href="#http-1-1-和-http-2-0-的区别" aria-label="Permalink to &quot;HTTP 1.1 和 HTTP 2.0 的区别&quot;">​</a></h2><ul><li>二进制协议：HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为&quot;帧&quot;，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。</li><li>多路复用：HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了&quot;队头堵塞&quot;的问题。</li><li>数据流：HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每个数据流都有一个独一无二的编号。数据包发送时，都必须标记数据流 ID ，用来区分它属于哪个数据流。</li><li>多路复用：HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了&quot;队头堵塞&quot;的问题。</li><li>数据流：HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每个数据流都有一个独一无二的编号。数据包发送时，都必须标记数据流 ID ，用来区分它属于哪个数据流。</li></ul><h2 id="http-和-https-协议的区别" tabindex="-1">HTTP 和 HTTPS 协议的区别 <a class="header-anchor" href="#http-和-https-协议的区别" aria-label="Permalink to &quot;HTTP 和 HTTPS 协议的区别&quot;">​</a></h2><p>HTTP 和 HTTPS 协议的主要区别如下：</p><ul><li>HTTPS 协议需要 CA 证书，费用较高；而 HTTP 协议不需要；</li><li>HTTP 协议是超文本传输协议，信息是明文传输的，HTTPS 则是具有安全性的 SSL 加密传输协议；</li><li>使用不同的连接方式，端口也不同，HTTP 协议端口是 80，HTTPS 协议端口是 443；</li><li>HTTP 协议连接很简单，是无状态的；HTTPS 协议是有 SSL 和 HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 更加安全。</li></ul><h2 id="http2-的头部压缩算法是怎样的" tabindex="-1">HTTP2 的头部压缩算法是怎样的？ <a class="header-anchor" href="#http2-的头部压缩算法是怎样的" aria-label="Permalink to &quot;HTTP2 的头部压缩算法是怎样的？&quot;">​</a></h2><p>HTTP2 的头部压缩是 HPACK 算法。在客户端和服务器两端建立“字典”，用索引号表示重复的字符串，采用哈夫曼编码来压缩整数和字符串，可以达到 50%~90%的高压缩率。</p><p>具体来说:</p><ul><li>在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送；</li><li>首部表在 HTTP/2 的连接存续期内始终存在，由客户端和服务器共同渐进地更新；</li><li>每个新的首部键值对要么被追加到当前表的末尾，要么替换表中之前的值。</li></ul><p>例如下图中的两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销。 <img src="'+T+'" alt=""></p><h2 id="说一下-http-3-0" tabindex="-1">说一下 HTTP 3.0 <a class="header-anchor" href="#说一下-http-3-0" aria-label="Permalink to &quot;说一下 HTTP 3.0&quot;">​</a></h2><p>HTTP/3 基于 UDP 协议实现了类似于 TCP 的多路复用数据流、传输可靠性等功能，这套功能被称为 QUIC 协议。 <img src="'+e+'" alt=""></p><ol><li><p>流量控制、传输可靠性功能：QUIC 在 UDP 的基础上增加了一层来保证数据传输可靠性，它提供了数据包重传、拥塞控制、以及其他一些 TCP 中的特性。</p></li><li><p>集成 TLS 加密功能：目前 QUIC 使用 TLS1.3，减少了握手所花费的RTT 数。</p></li><li><p>多路复用：同一物理连接上可以有多个独立的逻辑数据流，实现了数据流的单独传输，解决了 TCP 的队头阻塞问题。 <img src="'+p+'" alt=""></p></li><li><p>快速握手：由于基于 UDP，可以实现使用 0 ~ 1个RTT来建立连接</p></li></ol><h2 id="什么是-https-协议" tabindex="-1">什么是 HTTPS 协议？ <a class="header-anchor" href="#什么是-https-协议" aria-label="Permalink to &quot;什么是 HTTPS 协议？&quot;">​</a></h2><p>超文本传输安全协议（Hypertext Transfer Protocol Secure，简称：HTTPS）是一种通过计算机网络进行安全通信的传输协议。HTTPS 经由 HTTP 进行通信，利用 SSL/TLS 来加密数据包。HTTPS 的主要目的是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。 <img src="'+o+'" alt=""></p><p>HTTP 协议采用明文传输信息，存在信息窃听、信息篡改和信息劫持的风险，而协议 TLS/SSL 具有身份验证、信息加密和完整性校验的功能，可以避免此类问题发生。</p><p>安全层的主要职责就是对发起的 HTTP 请求的数据进行加密操作 和对接收到的 HTTP 的内容进行解密操作。</p><h2 id="https-通信-握手-过程" tabindex="-1">HTTPS 通信（握手）过程 <a class="header-anchor" href="#https-通信-握手-过程" aria-label="Permalink to &quot;HTTPS 通信（握手）过程&quot;">​</a></h2><p>HTTPS 的通信过程如下：</p><ol><li>客户端向服务器发起请求，请求中包含使用的协议版本号、生成的一个随机数、以及客户端支持的加密方法。</li><li>服务器端接收到请求后，确认双方使用的加密方法、并给出服务器的证书、以及一个服务器生成的随机数。</li><li>客户端确认服务器证书有效后，生成一个新的随机数，并使用数字证书中的公钥，加密这个随机数，然后发给服 务器。并且还会提供一个前面所有内容的 hash 的值，用来供服务器检验。</li><li>服务器使用自己的私钥，来解密客户端发送过来的随机数。并提供前面所有内容的 hash 值来供客户端检验。</li><li>客户端和服务器端根据约定的加密方法使用前面的三个随机数，生成对话秘钥，以后的对话过程都使用这个秘钥来加密信息。</li></ol><h2 id="dns-完整的查询过程" tabindex="-1">DNS 完整的查询过程 <a class="header-anchor" href="#dns-完整的查询过程" aria-label="Permalink to &quot;DNS 完整的查询过程&quot;">​</a></h2><p>DNS 服务器解析域名的过程：</p><ol><li>首先会在浏览器的缓存中查找对应的 IP 地址，如果查找到直接返回，若找不到继续下一步</li><li>将请求发送给本地 DNS 服务器，在本地域名服务器缓存中查询，如果查找到，就直接将查找结果返回，若找不到继续下一步</li><li>本地 DNS 服务器向根域名服务器发送请求，根域名服务器会返回一个所查询域的顶级域名服务器地址</li><li>本地 DNS 服务器向顶级域名服务器发送请求，接受请求的服务器查询自己的缓存，如果有记录，就返回查询结果，如果没有就返回相关的下一级的权威域名服务器的地址</li><li>本地 DNS 服务器向权威域名服务器发送请求，域名服务器返回对应的结果</li><li>本地 DNS 服务器将返回结果保存在缓存中，便于下次使用</li><li>本地 DNS 服务器将返回结果返回给浏览器</li></ol><p>比如要查询 www.baidu.com 的 IP 地址，首先会在浏览器的缓存中查找是否有该域名的缓存，如果不存在就将请求发送到本地的 DNS服务器中，本地 DNS 服务器会判断是否存在该域名的缓存，如果不存在，则向根域名服务器发送一个请求，根域名服务器返回负责 .com的顶级域名服务器的 IP 地址的列表。然后本地 DNS 服务器再向其中一个负责 .com 的顶级域名服务器发送一个请求，负责 .com 的顶级域名服务器返回负责 .baidu 的权威域名服务器的 IP 地址列表。然后本地 DNS 服务器再向其中一个权威域名服务器发送一个请求，最后权威域名服务器返回一个对应的主机名的 IP 地址列表。</p><h2 id="osi-七层模型" tabindex="-1">OSI 七层模型 <a class="header-anchor" href="#osi-七层模型" aria-label="Permalink to &quot;OSI 七层模型&quot;">​</a></h2><p>ISO 为了更好的使网络应用更为普及，推出了 OSI 参考模型 <img src="'+r+'" alt=""></p><ol><li>应用层</li></ol><p>OSI 参考模型中最靠近用户的一层，是为计算机用户提供应用接口，也为用户直接提供各种网络服务。我们常见应用层的网络服务协议有：HTTP，HTTPS，FTP，POP3、SMTP 等。</p><p>在客户端与服务器中经常会有数据的请求，这个时候就是会用到http(hyper text transfer protocol)(超文本传输协议)或者 https. 在后端设计数据接口时，我们常常使用到这个协议。</p><p>FTP 是文件传输协议，在开发过程中，个人并没有涉及到，但是我想，在一些资源网站，比如百度网盘``迅雷应该是基于此协议的。</p><p>SMTP 是 simple mail transfer protocol（简单邮件传输协议）。在一个项目中，在用户邮箱验证码登录的功能时，使用到了这个协议。</p><ol start="2"><li>表示层</li></ol><p>表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。数据压缩和加密也是表示层可提供的转换功能之一。</p><p>在项目开发中，为了方便数据传输，可以使用 base64 对数据进行编解码。如果按功能来划分，base64 应该是工作在表示层。</p><ol start="3"><li>会话层</li></ol><p>会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。</p><ol start="4"><li>传输层</li></ol><p>传输层建立了主机端到端的链接，传输层的作用是为上层协议提供端到端的可靠和透明的数据传输服务，包括处理差错控制和流量控制等问题。该层向高层屏蔽了下层数据通信的细节，使高层用户看到的只是在两个传输实体间的一条主机到主机的、可由用户控制和设定的、可靠的数据通路。我们通常说的，TCP UDP 就是在这一层。端口号既是这里的“端”。</p><ol start="5"><li>网络层</li></ol><p>本层通过 IP 寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的路由和交换节点，正确无误地按照地址传送给目的端的运输层。就是通常说的 IP 层。这一层就是我们经常说的 IP 协议层。IP 协议是 Internet 的基础。我们可以这样理解，网络层规定了数据包的传输路线，而传输层则规定了数据包的传输方式。</p><ol start="6"><li>数据链路层</li></ol><p>将比特组合成字节,再将字节组合成帧,使用链路层地址 (以太网使用 MAC 地址)来访问介质,并进行差错检测。</p><p>网络层与数据链路层的对比，通过上面的描述，我们或许可以这样理解，网络层是规划了数据包的传输路线，而数据链路层就是传输路线。不过，在数据链路层上还增加了差错控制的功能。</p><ol start="7"><li>物理层 实际最终信号的传输是通过物理层实现的。通过物理介质传输比特流。规定了电平、速度和电缆针脚。常用设备有（各种物理设备）集线器、中继器、调制解调器、网线、双绞线、同轴电缆。这些都是物理层的传输介质。</li></ol><p>OSI 七层模型通信特点：对等通信，为了使数据分组从源传送到目的地，源端 OSI 模型的每一层都必须与目的端的对等层进行通信，这种通信方式称为对等层通信。在每一层通信过程中，使用本层自己协议进行通信。</p><h2 id="tcp-的三次握手和四次挥手" tabindex="-1">TCP 的三次握手和四次挥手 <a class="header-anchor" href="#tcp-的三次握手和四次挥手" aria-label="Permalink to &quot;TCP 的三次握手和四次挥手&quot;">​</a></h2><ol><li>三次握手</li></ol><p><img src="'+P+'" alt=""></p><p>三次握手（Three-way Handshake）其实就是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包。进行三次握手的主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备。实质上其实就是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息。</p><p>刚开始客户端处于 Closed 的状态，服务端处于 Listen 状态。</p><p>第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN，此时客户端处于 SYN_SEND 状态。首部的同步位 SYN=1，初始序号 seq=x，SYN=1 的报文段不能携带数据，但要消耗掉一个序号。</p><p>第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的 SYN报文作为应答，并且也是指定了自己的初始化序列号 ISN。同时会把客户端的 ISN + 1 作为ACK 的值，表示自己已经收到了客户端的 SYN，此时服务器处于 SYN_REVD 的状态。</p><p>在确认报文段中 SYN=1，ACK=1，确认号 ack=x+1，初始序号 seq=y</p><p>第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，当然，也是一样把服务器的 ISN + 1 作为 ACK 的值，表示已经收到了服务端的 SYN 报文，此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接。</p><p>确认报文段 ACK=1，确认号 ack=y+1，序号 seq=x+1（初始为 seq=x，第二个报文段所以要+1），ACK 报文段可以携带数据，不携带数据则不消耗序号。</p><p>那为什么要三次握手呢？两次不行吗？</p><p>为了确认双方的接收能力和发送能力都正常,如果是用两次握手，则会出现下面这种情况：</p><p>如客户端发出连接请求，但因连接请求报文丢失而未收到确认，于是客户端再重传一次连接请求。后来收到了确认，建立了连接。数据传输完毕后，就释放了连接，客户端共发出了两个连接请求报文段，其中第一个丢失，第二个到达了服务端，但是第一个丢失的报文段只是在某些网络结点长时间滞留了，延误到连接释放以后的某个时间才到达服务端，此时服务端误认为客户端又发出一次新的连接请求，于是就向客户端发出确认报文段，同意建立连接，不采用三次握手，只要服务端发出确认，就建立新的连接了，此时客户端忽略服务端发来的确认，也不发送数据，则服务端一致等待客户端发送数据，浪费资源。</p><p>简单来说就是以下三步：</p><p>第一次握手：客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。</p><p>第二次握手：服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。</p><p>第三次握手：当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。</p><p>TCP 三次握手的建立连接的过程就是相互确认初始序号的过程，告诉对方，什么样序号的报文段能够被正确接收。 第三次握手的作用是客户端对服务器端的初始序号的确认。如果只使用两次握手，那么服务器就没有办法知道自己的序号是否 已被确认。同时这样也是为了防止失效的请求报文段被服务器接收，而出现错误的情况。</p><ol start="2"><li>四次挥手 <img src="'+s+'" alt=""> 刚开始双方都处于 ESTABLISHED 状态，假如是客户端先发起关闭请求。四次挥手的过程如下：</li></ol><p>第一次挥手： 客户端会发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态。即发出连接释放报文段（FIN=1，序号 seq=u），并停止再发送数据，主动关闭 TCP 连接，进入 FIN_WAIT1（终止等待 1）状态，等待服务端的确认。</p><p>第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态。即服务端收到连接释放报文段后即发出确认报文段（ACK=1，确认号ack=u+1，序号 seq=v），服务端进入 CLOSE_WAIT（关闭等待）状态，此时的 TCP 处于半关闭状态，客户端到服务端的连接释放。客户端收到服务端的确认后，进入 FIN_WAIT2（终止等待 2）状态，等待服务端发出的连接释放报文段。</p><p>第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK的状态。 即服务端没有要向客户端发出的数据，服务端发出连接释放报文段（FIN=1，ACK=1，序号 seq=w，确认号 ack=u+1），服务端进入 LAST_ACK（最后确认）状态，等待客户端的确认。</p><p>第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态。即客户端收到服务端的连接释放报文段后，对此发出确认报文段（ACK=1，seq=u+1，ack=w+1），客户端进TIME_WAIT（时间等待）状态。此时 TCP 未释放掉，需要经过时间等待计时器设置的时间 2MSL后，客户端才进入 CLOSED 状态。</p><p>那为什么需要四次挥手呢？</p><p>因为当服务端收到客户端的 SYN 连接请求报文后，可以直接发送SYN+ACK 报文。其中 ACK 报文是用来应答的，SYN 报文是用来同步的。但是关闭连接时，当服务端收到 FIN 报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个 ACK 报文，告诉客户端，“你发的 FIN报文我收到了”。只有等到我服务端所有的报文都发送完了，我才能发送 FIN 报文，因此不能一起发送，故需要四次挥手。</p><p>简单来说就是以下四步：</p><p>第一次挥手：若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。</p><p>第二次挥手：服务端收到连接释放请求后，会告诉应用层要释放 TCP链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。</p><p>第三次挥手：服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。</p><p>第四次挥手：客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。</p><p>TCP 使用四次挥手的原因是因为 TCP 的连接是全双工的，所以需要双方分别释放到对方的连接，单独一方的连接释放，只代表不能再向对方发送数据，连接处于的是半释放的状态。最后一次挥手中，客户端会等待一段时间再关闭的原因，是为了防止发送给服务器的确认报文段丢失或者出错，从而导致服务器 端不能正常关闭。</p>',89),n=[h];function c(C,u,H,d,I,A){return i(),t("div",null,n)}const E=l(S,[["render",c]]);export{_ as __pageData,E as default};
