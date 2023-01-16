# 知识广度
前端工程师有很多，而是技能全面、独当一面的前端工程师到哪里都是“香饽饽”，企业争抢。所以，技术广度将决定你的稀缺性，以及未来的发展空间。

现代前端工程师已经不单单是开发页面了，你可能需要去开发移动端、服务端。或者和他们有亲密的合作，你需要了解他们的运作流程。

企业想要招聘到一些全能型的工程师，能在工作中串通上下流程，而不是只做开发。

## 移动端H5 click有300延迟，如何解决？

初期解决方案试用FastClick
```js
window.addEventListener("load",function(){
    FastClick.attach(document.body)
},false)
```
FastClick原理就是监听touchend事件(touchstart touchend会优先于click触发)，使用自定义DOM事件模拟一个click事件，把默认的click事件(300ms之后触发)禁止掉。

现代浏览器的改进,android chrome32版本之后，iOS是在9.3版本之后，在head中有`width=device-width`属性即可。只要有这个属性，浏览器就会人为已经做了浏览器优化了。
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
</head>
```

## 网络请求中，token和cookie有什么区别？
cookie：HTTP无状态，每次请求都要带cookie，以帮助识别身份。服务端也可以向客户端set-cookie，cookie大小限制4kb。默认有跨域限制，不可跨域共享、传递cookie。在HTML之前cookie常被用于本地存储，HTML5之后推荐使用localStorage和sessionStorage。

现代浏览器开始禁止第三方cookie，和跨域限制不同，这里是禁止网页引入的第三方JS设置cookie。打击第三方广告，保护用户隐私，新增属性SameSite：Strict/Lax/None，值可自己选择。

cookie和session：cookie用于登录验证，存储用户标识(如useId)，session在服务端，存储用户详细信息，和cookie信息一一对应，cookie+session是常见的登录验证解决方案。
![](/images/44.png)

cookie是HTTP规范，而token是自定义传递。cookie会默认被浏览器存储，而token需自己存储。token默认没有跨域限制。

token常用的技术术语是JWT(JSON Web Token)，可以替代cookie + session的方式。前端发起登录，后端验证成功之后，返回一个加密的token，前端自行存储这个token(其中包含了用户信息，加密了)，以后访问服务端接口都带着这个token，作为用户信息。

## Session和JWT哪个更好
首先没有什么好不好坏，只有适合不适合。

session的优点是原理简单，易于学习，用户信息存储在服务端，可快速封禁某个用户。缺点是占用服务端内存，硬件成本高，多进程多服务器时不好同步，需使用第三方缓存，如redis。默认有跨域限制。

JWT的优点是不占用服务端内存，多进程、多服务器不受影响，没有跨域限制。缺点是用户信息存储在客户端，无法快速封禁某用户，如果想封禁就要建立黑名单。万一服务端秘钥被泄露，则用户信息全部丢失。token体积一般大于cookie，会增加请求的数据量。

如有严格管理用户信息的需求(保密、快速封禁)推荐Session，如没有特殊要求，则使用JWT(如创业初期的网站)。

## HTTP协议和UDP协议有什么区别
前端用UDP协议比较少，大部分还是使用HTTP协议。

网络协议HTTP协议在应用层，TCP、UDP协议在传输层，严格来说，应该拿TCP和UDP进行比较。

TCP协议：有连接(三次握手)，有断开(四次挥手)，稳定传输。

UPD协议：无连接，无断开，不稳定传输，但效率高。适合于视频会议、语音通话。
