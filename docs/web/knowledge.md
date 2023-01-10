# 前端基础知识
HTMLCSS JS HTTP 等基础知识是前端面试的第一步，基础知识不过关将直接被拒。扎实的前端基础知识，是作为前端工程师的根本。基础知识能保证最基本的使用，即招聘进来能干活，能产出。

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