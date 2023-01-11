# 前端基础知识
HTMLCSS JS HTTP 等基础知识是前端面试的第一步，基础知识不过关将直接被拒。扎实的前端基础知识，是作为前端工程师的根本。基础知识能保证最基本的使用，即招聘进来能干活，能产出。

完善的知识范围，包含了前端工程师常用的所有知识点合理的结构化，便于理解和记忆，主要模块有：
* 计算机基础，如算法、数据结构、设计模式等
* 前端基础知识，如 HTML JS 语法和 API 等
* 网络，如 HTTP 协议
* 开发流程，如打包构建、CI/CD 前端框架，常见的 Vue React 及其周边工具
* 运行和监控，如安全、性能优化

考察的重点：
* HTML CSS JS 基础知识
* HTTP Ajax基础知识
* Vue 等框架的基本应用

## 请说明Ajax Fetch Axios三者的区别
三者都用于网络请求，但是不同维度

* Ajax (Asynchronous Javascript and XML)，它是一种技术统称
* Fetch是一种具体的api
* Axios是一个第三方库

例如通过XMLHttpRequest来实现Ajax，XMLHttpRequest也是一个api
```js
function ajax(url,successFn){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.onreadystatechange = function(){
        //这里的函数异步执行
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                successFn(xhr.responseText);
            }
        }
    }
    xhr.send(null);
}
```
Fetch是浏览器原生API，用于网络请求，和XMLHttpRequest一个级别，Fetch语法更加简介、易用，支持Promise，相当于XMLHttpRequest升级版本。
```js
function ajax(url){
    return fetch(url).then(res=>res.json())
}
```
所以ajax是个统称，可以使用XMLHttpRequest或者fetch来实现。

Axios是一个最常用的网络请求lib，它随着Vue火爆起来，内部可用XMLHttpRequest和Fetch来实现，可用于浏览器端和Node端。

实际项目中，使用现成的lib，尽量不要自己造轮子，但读源码、造轮子是很好的个人学习方式。

## 节流和防抖
节流和防抖面的很多，一般会问两者有什么区别，分别用于什么场景。

防抖，形象的说就是防止抖动，你先抖动着，啥时候停了，再执行下一步。例如一个搜索输入框，等输入停止之后，再触发搜索。

```js
function debounce(fn,delay = 200){
    let timer = 0;
    return function (){
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>{
            fn.apply(this,arguments); //透传this和参数
            timer = 0;
        },delay);
    }   
}
```
传入一个函数和防抖时间，先定义一个定时器，如果你有这个记录则清除，每次触发函数的话都会有一个记录，如果连续触发的话，就会清除之前的timer，直到停止了，则最后的这个timer执行。

节流，节省交互沟通，流，不一定指流量。先一个，再一个，按时间节奏来，插队者无效。例如，drag或scroll期间触发某个回调，要设置一个时间间隔。
```js
function throttle(fn,delay = 100){
    let timer = 0;
    return function (){
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this.arguments);
            timer = 0;
        },delay)
    }
}
```
每次执行函数都有timer记录一下，如果timer没有完事，想要插队，那么就return掉，不管了。

总体来说，节流是限制执行频率，有节奏的执行。防抖是限制执行次数，多次密集的触发只执行一次。节流关注过程，防抖关注结果。

## px-%-em-rem-vw-vh有什么区别 
这个主要是css基本功，不同单位的不同使用场景。
* px是基本单位，绝对单位(其他的都是相对单位)
* %是相对于父元素的宽度比例
* em是相对于当前元素的font-size，当前元素font-size有多大，em有多大
* rem相对于根节点的font-size，r指的是root，通常用于做手机端不同屏幕响应式匹配
* vw是屏幕宽度的1%
* vh屏幕高度的1%
* vmin是vw和vh两者的最小值，vmax是两者的最大值。

## 什么时候不能使用箭头函数
我们要知道箭头函数有什么缺点，什么时候不能使用箭头函数？

箭头函数的缺点如下：
1. 没有arguments
```js
const fn1 = ()=>{
    console.log('arguments',arguments);
}
fn1(100,200)
```
2. 无法通过apply call bind改变this
```js
const fn2 = ()=>{
    console.log('this',this)
}
fn2.call({x:100})
```
3. 某些箭头函数代码难以阅读
```js
const fn3 = (a,b) => b === undefined ? b => a*b : a*b
```

什么时候不能使用箭头函数
1. 对象方法
```js
const obj = {
    name: '张三',
    getName: ()=>{
        return this.name
    }
}
console.log(obj.getName())
```
2. 原型方法
```js
const obj = {
    name: '张三'
}
obj.__proto__.getName = ()=>{
    return this.name
}
console.log(obj.getName())
```
3. 构造函数
```js
const Foo = (name,age)=>{
    this.name = name
    this.age = age
}
const f = new Foo('张三',20) //报错 Foo is not a constructor
```
4. 动态上下文中的回调函数
```js
const btn1 = document.getElementById('btn1')
btn1.addEventListener('click',()=>{
    //console.log(this === window)
    this.innerHTML = 'clicked'
})
```
5. Vue声明周期和method
```js
{
    data(){
        return {
            name: '张三'
        }
    },
    methods: {
        getName:()=>{
            //报错 Cannot read properties of undefined (reading 'name')
            return this.name
        },
        // getName(){
        //     return this.name //正常
        // }
    },
    mounted:()=>{
        //报错 Cannot read properties of undefined (reading 'name')
        console.log('msg',this.name);
    }
}
```
Vue组件本质上是一个JS对象，React组件(非Hooks)它本质上是一个ES6 class，它是可以的。

## 请描述TCP三次握手和四次挥手
这是非常常考的题目，这个题目不需要看过多的细节，很细的话涉及非常多的网络底层知识，这个对我们的开发没有什么价值，太底层了。我们应该关注为什么会有三次握手和四次挥手，握手是什么，挥手是什么，讲清楚过程和原因就行。

握手是TCP连接的过程，它需要三次。挥手是TCP断开，它需要四次。

建立TCP连接，首先我们需要先建立连接，确保双方都有收发消息的能力，然后才能传输内容(比如发送一个get请求)，网络连接是TCP协议，传输内容是HTTP协议。

三次握手，建立连接过程
1. Client发包，Server接收。Server知道了有Client要找我
2. Server发包，Client接收。Client知道了Server已经收到信息了
3. Client发包，Server接收。Server知道了Client要准备发送了

四次挥手，关闭连接
1. Client发包，Server接收。Server知道了Client已经请求结束
2. Server发包，Client接收。Client知道了Server已经收到，等待关闭
3. Server发包，Client接收。Client知道了Server此时可以关闭连接了
4. Client发包，Server接收。Server知道了可以关闭了，然后就关闭连接

## for...in和for...of有什么区别
首先是key和value的区别，for...in遍历得到key，for...of遍历得到value。

其次是适用于不同的数据类型
* 遍历对象：for...in可以，for...of不可以
* 遍历Map Set：for...of可以，for...in不可以
* 遍历generator：for...of可以，for...in不可以

为什么会有这种区别呢，for...in用于可枚举数据，如对象、数组、字符串，得到key。for...of用于可迭代数据，如数组、字符串、Map、Set，得到value。

## for await...of有什么作用？
for await...of用于遍历多个Promise
```js
const p1 = createPromise(100)
const p2 = createPromise(200)
const p3 = createPromise(300)

const list = [p1,p2,p3]

for await(let res of list){
    console.log(rest)
}
```

## offsetHeight、scrollHeight、clientHeight的区别
* offsetHeight、offsetWidth尺寸计算规则为border + padding + content
* clientHeight、clientWidth尺寸计算规则为padding + content
* scrollHeight、scrollWidth尺寸计算规则为padding + 实际内容尺寸

## HTMLCollection和NodeList区别
我们首先要知道Node和Element的区别，DOM是一棵树，所有节点都是Node。Node可以作为所有节点的基类，Node是Element的基类，Element是其他HTML元素的基类，如HTMLDivElement。

HTMLCollection是Element的集合，NodeList是Node集合。

## Vue computed和watch区别
这两个完全不是一回事，场景不一样，用途也不一样。

computed用于计算产生新的数据，有缓存。watch用于监听现有数据

## JS严格模式有什么特点
JS严格模式细节要求很多，只掌握重点即可。

严格模式开启有两种方式，一种是全局开启，另一种是某个函数开启。
```js
'use strict' //全局开启

function fn(){
    'use strict'  //某个函数开启
}
```

它的特点如下：

1. 全局变量必须先声明
```js
'use strict'
n = 10 //ReferenceError: n is not defined
```
2. 禁止使用with
```js
'use strict'
var obj = {x:10}
with(obj){
    //Uncaught SyntaxError: Strict mode code may not include a with sttement
    console.log(x)
}
```
3. 创建eval作用域
```js
'use strict'
var x = 10
eval('var x = 20;console.log(x)') //很不推荐使用
console.log(x)
```
4. 禁止this指向window
```js
'use strict'
function fn(){
    console.log('this',this) //undefined
}
fn()
```
5. 函数参数不能重名
```js
'use strict'

//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
function fn(x,x,y){
    return
}
```
## Vue组件通讯有几种方式，尽量全面
1. props和$emit
2. 自定义事件
3. $attr
4. $parent
5. $refs
6. provide/inject
7. Vuex

这几种方式有各自不同的场景：
* 父子组件
* 上下级组件(跨多级)通讯
* 全局组件

## HTTP跨域请求时为何发送options请求
首先跨域请求时因为浏览器的同源策略，一般限制Ajax网络请求，不能跨域请求server，不会限制`<link>`、`<img>`、`<script>`、`<iframe>`加载第三方资源。

options请求时跨域请求之前的预检查，它要检查服务端是否满足当前请求的能力，例如是否支持put请求，它是浏览器自行发起的，无需我们干预，不会影响实际的功能。