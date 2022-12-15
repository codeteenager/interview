# Vue面试题
## 简单介绍Vue.js是什么?
Vue.js是一款用于构建用户界面的渐进式框架。渐进式框架是Vue.js相比于Angular较为受开发者喜欢的原因之一。这意味着，Vue.js是一个无论项目大小都可以满足开发需求的框架。通俗地讲，Vue.js就是一间已经搭建好的“空屋”。与单纯使用jQuery这种库相比，Vue.js可以更好地实现代码复用、减少工作量。

## Vue的优缺点是什么?
优点：1. 前端专门负责前端页面和特效的编写，后端专门负责后端业务逻辑的处理；2. 前端追求的是页面美观、页面流畅、页面兼容等，而后端追求的是“三高”（高并发、高可用、高性能），让它们负责各自的领域，让专业人员负责处理专业的事情，提高开发效率。

缺点：1. 当接口发生改变的时候，前后端都需要改变；2. 当发生异常的时候，前后端需要联调。联调是非常浪费时间的。

## 使用Vue的好处是什么?
Vue两大特点：响应式编程、组件化。Vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、视图与数据和结构分离、虚拟DOM、运行速度快。

## 在Vue.js中怎么理解MVVM模式？
MVVM是Model View ViewModel的缩写。其中Model、View、ViewModel的作用分别如下。
1. Model代表数据模型，可以在Model中定义数据修改和操作的业务逻辑。
2. View代表UI组件，负责将数据模型转换成UI展现出来。
3. ViewModel监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View和Model的对象，连接Model和View。在MVVM架构下，View和Model之间并没有直接的联系，而是通过ViewModel进行交互。Model和ViewModel之间的交互是双向的，因此View数据的变化会同步到Model中，而Model数据的变化也会立即反映到View上。ViewModel通过双向数据绑定把View层和Model层连接了起来，而View和Model之间的同步工作完全是自动的，无须人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM、不需要关注数据状态的同步问题，复杂的数据状态维护完全由MVVM统一管理。

## Vue的生命周期是什么?
1. beforeCreate()(创建前)在数据观测和初始化事件还未开始时被调用
2. created()(创建后)在完成数据观测、属性和方法的运算、初始化事件后被调用，$el属性还没有显示出来
3. beforeMount()(载入前)在挂载开始前被调用，相关的render函数首次被调用，实例已完成以下配置：编译模板，把data中的数据和模板生成.html。注意此时还没有挂载.html到页面上。
4. mounted()(载入后)在el被新创建的vm.$el替换，并挂载到实例上后被调用。实例已完成以下配置：用上面编译好的.html内容替换el属性指向的DOM对象。注意此时模板中的.html被渲染到.html页面中，此过程中进行Ajax交互。
5. beforeUpdate()(更新前)在数据更新前被调用，发生在虚拟DOM重新渲染和打补丁前。在该钩子函数中可以进一步更改状态，不会触发附加的重渲染过程。
6. updated()(更新后)在由于数据更改导致的虚拟DOM重新渲染和打补丁后被调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而，在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子函数在服务器端渲染期间不被调用。
7. beforeDestroy()(销毁前)在实例销毁前被调用，实例仍然完全可用。
8. destroyed()(销毁后)在实例销毁后被调用，调用后，所有的事件监听器会被移除、所有的子实例也会被销毁。该钩子函数在服务器端渲染期间不被调用。

## 第一次页面加载会触发哪几个钩子函数?
第一次会触发beforeCreate()、created()、beforeMount()、mounted()，并且在mounted()阶段DOM被渲染完成。

## v-if和v-show有什么区别?
1. 相同点：两者都是在判断DOM节点是否要显示。
2. 不同点：
    * 实现方式。v-if是根据后面数据的真假值，判断直接从DOM树上删除或重建元素节点；v-show只是修改元素的CSS样式，也就是display的属性值，元素始终在DOM树上。
    * 编译过程。v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单地基于CSS切换
    * 编译条件。v-if是惰性的，如果初始条件为假，则什么也不做，只有在条件第一次变为真时才开始局部编译；v-show是在任何条件下（无论首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留。
    * 性能消耗。v-if有较高的切换消耗，不适合做频繁的切换；而v-show有较高的初始渲染消耗，适合做频繁的切换。

## Vue组件中data为什么必须是函数?
在new Vue()中，data是可以作为一个对象进行操作的。然而，在component中，data只能以函数的形式存在，不能直接将对象赋值给它。

当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立备份，这样各个实例中的data不会相互影响，以确保是独立的。如果传给组件的data是一个原始对象，则在建立多个组件实例时，它们就会共用这个data对象，修改其中一个组件实例的数据就会影响其他组件实例的数据。

## 前后端渲染各自的优点?
前端渲染的优点在于：
1. 业务分离，后端只需要提供数据接口，前端在开发时也不需要部署对应的后端环境，通过一些代理服务器工具就能远程获取后端数据进行开发，能够提升开发效率；
2. 计算量转移，原本需要后端渲染的任务转移给了前端，减轻了服务器的压力。

后端渲染的优点在于：
1. 对搜索引擎友好；
2. 首页加载时间短，后端渲染加载完成后就直接显示HTML，但前端渲染在加载完成后还需要有一段JS渲染的时间。

## computed、methods、watch的区别?
1. computed：计算属性是用来声明式地描述一个值依赖了其他的值。当在模板中把数据绑定到一个计算属性上时，Vue会在其依赖的任何值导致该计算属性改变时更新DOM。这个功能是非常强大的，它可以让代码更加声明式、数据驱动且易于维护。
2. methods：methods函数绑定事件调用，不会使用缓存。
3. watch：监听的是定义的变量。当定义变量的值发生变化时，调用对应的方法。在`<div>`中编写一个表达式name，在data中写入num和lastname、firstname。在watch中，当num的值发生变化时，就会调用num的方法，方法里面的形参对应的是num的新值和旧值，而在computed中，计算的是name依赖的值，它不能计算在data中已经定义过的变量。

## Vue的响应式原理是什么?
当一个Vue实例创建时，Vue会遍历data选项的属性，用Object.defineProperty将它们转为getter/setter，并在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的watcher实例，它会在组件渲染的过程中把属性记录为依赖，然后当依赖项的setter被调用时，会通知watcher重新计算，从而使它关联的组件得以更新。

## Vue中Key值的作用是什么?
使用Key来给每个节点做一个唯一标识，Key的作用主要是高效地更新虚拟DOM。另外，在Vue中使用相同标签名元素过渡切换时，也会使用到Key属性，其目的是让Vue可以区分它们，否则Vue只会替换其内部属性，而不会触发过渡效果。

## 在Vue中做数据渲染的时候，如何保证将数据原样输出?
1. v-text：将数据输出到元素内部，如果输出的数据有HTML代码，会作为普通文本输出。
2. v-html：将数据输出到元素内部，如果输出的数据有HTML代码，会被渲染。
3. {{ }}：插值表达式，可以直接获取Vue实例中定义的数据或函数。使用插值表达式的时候，值可能闪烁；而使用v-html、v-text时不会闪烁，有值就显示，没有值就会被隐藏。

## Vue的双向数据绑定原理是什么?
Vue.js采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调。具体步骤如下:

第一步：需要对Observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter。这样给这个对象的某个属性赋值，就会触发setter，那么就能监听到数据变化了。

第二步：Compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者（一旦数据有变动，收到通知，更新视图）。

第三步：Watcher订阅者是Observer和Compile间通信的“桥梁”，主要负责做的事情如下。
1. 在自身实例化时往属性订阅器（dep）中添加自身。
2. 自身必须有一个update()方法。待属性变动通知dep.notice()时，能调用自身的update()方法，并触发Compile中绑定的回调。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的Model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile间的通信“桥梁”，达到“数据变化→视图更新、视图交互变化→Model数据变更”的双向绑定效果。

![](/vue/2.png)

## `<transition>`和`<transition-group>`有什么区别?
唯一的区别就是`<transition>`中只能包裹一个元素，而`<transition-group>`可以包裹多个元素。

## Vue中data必须是一个函数吗?
对象为引用类型，当重用组件时，由于数据对象都指向同一个data对象，若在一个组件中修改data，其他重用组件中的data会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，因此不会出现这个问题。

## 过渡动画实现的三种方式是什么?
第一种：使用Vue的`<transition>`标签结合CSS样式完成动画。

第二种：利用Animate.css结合`<transition>`实现动画。

第三种：利用Vue中的钩子函数实现动画。

## Vue组件间是如何传值通信的?
1. 父组件与子组件传值。
   * 父组件传值给子组件：子组件通过props方法接收数据。
   * 子组件传值给父组件：用$emit方法传递参数。
2. 非父子组件间的数据传递，如兄弟组件间传值：用eventBus创建一个事件中心（相当于中转站），用来传递事件和接收事件。此外，也可以用Vuex来实现。

## 请阐述Vue子组件调用父组件的几种方法?
1. 直接在子组件中通过this.$parent.event来调用父组件的方法。
2. 在子组件中用$emit向父组件触发一个事件，父组件监听这个事件。

## 什么是虚拟DOM?
虚拟DOM其实就是一棵以JavaScript对象（VNode节点）作为基础的树，用对象属性来描述节点。实际上，它只是一层对真实DOM的抽象，最终可以通过一系列操作使这棵树映射到真实环境上。

简单来说，可以把虚拟DOM理解为一个简单的JavaScript对象，并且最少包含标签名（tag）、属性（attrs）和子元素对象（children）三个属性。不同的框架对这三个属性的命名会有所区别。

## $route和$router的区别?
$route是“路由信息”对象，包括path、params、hash、query、fullPath、matched、name等路由信息参数。而$router是“路由实例”对象，包括路由的跳转方法、钩子函数等。

## vue-router有哪几种导航钩子?
1. 全局导航钩子。router.beforeEach(to,from,next)，作用是跳转前进行判断拦截。
2. 组件内的钩子。
3. 单独路由独享组件。

## Vue的基本原理
当一个Vue实例创建时，Vue会遍历data中的属性，用Object.defineProperty(vue3.0 使用 proxy)将它们转为getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

![](/vue/1.png)

## MVVM、MVC、MVP的区别
MVC、MVP和MVVM是三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化开发效率。
在开发单页面应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。页面的渲染、数据的获取，对用户事件的响应所有的应用逻辑都混合在一起，这样在开发简单项目时，可能看不出什么问题，如果项目变得复杂，那么整个文件就会变得冗长、混乱，这样对项目开发和后期的项目维护是非常不利的。

### MVC
MVC通过分离Model、View和Controller的方式来组织代码结构。其中View负责页面的显示逻辑，Model负责存储页面的业务数据，以及对相应数据的操作。并且View和Model应用了观察者模式，当Model层发生改变的时候它会通知有关View层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。

### MVVM
MVVM 分为 Model、View、ViewModel：Model 代表数据模型，数据和业务逻辑都在 Model 层中定义；View 代表 UI 视图，负责数据的展示；
ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作 DOM。

### MVP
MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在MVC 模式中使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的 Controller 只知道Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将Model 的变化和 View 的变化绑定在一起，以此来实现 View 和Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。

## slot 是什么？有什么作用？原理是什么？
slot 又名插槽，是 Vue 的内容分发机制，组件内部的模板引擎使用slot 元素作为承载分发内容的出口。插槽 slot 是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot 又分三类，默认插槽，具名插槽和作用域插槽。

默认插槽：又名匿名插槽，当 slot 没有指定 name 属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。

具名插槽：带有具体名字的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽。

作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。

实现原理：当子组件 vm 实例化时，获取到父组件传入的 slot 标签的内容，存放在 vm.$slot 中，默认插槽为 vm.$slot.default，具名插槽为 vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到 slot 标签，使用$slot 中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。

## $nextTick 原理及作用
Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。

nextTick 的 核 心 是 利 用 了 如 Promise 、 MutationObserver 、setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的
微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。

nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理。

nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因∶

如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM的渲染，可以减少一些无用渲染

同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要

Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作DOM。有时候，可能遇到这样的情况，DOM1 的数据发生了变化，而 DOM2需要从 DOM1 中获取数据，那这时就会发现 DOM2 的视图并没有更新，这时就需要用到了 nextTick 了。

由于 Vue 的 DOM 操作是异步的，所以，在上面的情况中，就要将 DOM2获取数据的操作写在$nextTick 中
```js
this.$nextTick(()=>{
    //获取数据的操作
});
```

所以，在以下情况下，会用到 nextTick：在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在 nextTick()的回调函数中。

在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在 nextTick()的回调函数中。

因为在 created()钩子函数中，页面的 DOM 还未渲染，这时候也没办法操作 DOM，所以，此时如果想要操作 DOM，必须将操作的代码放在
nextTick()的回调函数中。

## Vue 单页应用与多页应用的区别
SPA 单页面应用（SinglePage Web Application），指只有一个主页面的应用，一开始只需要加载一次 js、css 等相关资源。所有内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅仅刷新局部资源。

MPA 多页面应用 （MultiPage Application），指有多个独立页面的应用，每个页面必须重复加载 js、css 等相关资源。多页应用跳转，需要整页资源刷新。
| 对比项/模式 | SPA  | MPA |
| --------- | ----- | ---- |
| 结构 | 一个主页面+许多模块的组件 | 许多完整的页面 | 
| 体验 |页面切换快，体验佳。当初次加载文件过多时，需要做相关的调优 |页面切换慢，网速慢的时候，体验尤其不好 |
| 资源文件 | 组件公用的资源只需要加载一次 | 每个页面都要自己加载公用的资源 |
| 适用场景 | 对体验度和流畅度有较高要求的应用，不利于SEO(可借助SSR优化SEO) | 适用于对SEO要求较高的应用 |
| 过渡动画 | Vue提供了transition的封装组件，容易实现 | 很难实现 |
| 内容更新 | 相关组件的切换，即局部更新 | 整体HTML的切换，费钱(重复HTTP请求) |
| 路由模式 |可以使用hash，也可以使用history | 普通链接跳转 |
| 数据传递 | 因为单页面，使用全局变量就好(Vuex) | cookie、localstorage等缓存方案，URL参数，调用接口保存等 |
| 相关成本 |前期开发成本较高，后期维护较为容易 |前期开发成本低，后期维护就比较麻烦，因为一个功能需要改很多地方 |

## Vue 中封装的数组方法有哪些，其如何实现页面更新
在 Vue 中，对响应式处理利用的是 Object.defineProperty 对数据进行拦截，而这个方法并不能监听到数组内部变化，数组长度变化，数
组的截取变化等，所以需要对这些操作进行 hack，让 Vue 能监听到其中的变化。

Vue将被侦听的数据的变更方法进行了包裹，所以他们也将会触发视图更新。这些被包裹过的方法包括：
* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

那 Vue 是如何实现让这些数组方法实现元素的实时更新的呢，下面是Vue 中对这些方法的封装
```js
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})
```
简单来说就是，重写了数组中的那些原生方法，首先获取到这个数组的__ob__，也就是它的 Observer 对象，如果有新的值，就调用
observeArray 继续对新的值观察变化（也就是通过 target__proto__== arrayMethods 来改变了数组实例的型），然后手动调用 notify，
通知渲染 watcher，执行 update。