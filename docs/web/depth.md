# 知识深度
大厂面试会通过各种难题来试探你的技术深度，评估你的技术发展潜力，这是入职后确定级别、薪资的重要参考。所以，技术深度将决定你的“钱途”。

为何要考察呢？

* 深挖你的技术“天花板”，看未来潜力和可培养性 —— 特别是对于刚毕业不就的新人。
* 如果面试通过了，大公司要定级（P6 还是 P7），其中技术深度就是很重要的参考标准。一个没有技术深度的人，不可能给高级别职称。
* 希望和有技术深度的工程师共事。而且，那么多候选人，择优录取，肯定希望能招募到技术深度好的工程师。

考察重点是我们日常使用的技术，的一些深入。没有什么特别出格的。
* 非应用层面，深入到原理层面
* JS相关原理
* Vue React 相关原理

技术深度，就有那么 1-2 个方面即可。深了，就不可能全面。技术深度的题目不过关，也不一定就面试不通过。

## JS内存泄露如何检测？场景有哪些？
JS垃圾回收是指回收那些函数已经执行完成再也用不到的对象或数据，之前用的是引用计数，但是循环引用有缺陷，现在用的是标记清除，从js的根window向下遍历，找到就保留，找不到就清除。

内存泄露检测要看内存的变化，如果内存升高升高降下来，这是正常的情况，不算内存泄露。所以我们要看如何检测内存变化。内存变化可以使用chrome devtools中的Performance工具来进行检测。

内存泄露的场景(以Vue为例)
* 被全局变量、函数引用，组件销毁时未清除
```vue
<script>
export default{
    data(){
        return {
            arr:[10,20,30]
        }
    },
    mounted(){
        window.arr = this.arr;
        window.printArr = ()=>{
            console.log(this.arr)
        }
    },
    //Vue2
    beforeUnmount(){
        window.arr = null
        window.printArr = null
    }
}
</script>
```

* 被全局事件、定时器引用，组件销毁时未清除
```vue
<script>
export default{
    data(){
        return {
            arr:[10,20,30],
            intervalId: 0
        }
    },
    mounted(){
        this.intervalId = setInterval(()=>{
            console.log(this.arr);
        },100);
    },
    //Vue2
    beforeUnmount(){
        if(this.intervalId){
            clearInterval(this.intervalId);
        }
    }
}
</script>
```
```vue
<script>
export default{
    data(){
        return {
            arr:[10,20,30]
        }
    },
    methods:{
        printArr(){
            console.log(this.arr)
        }
    },
    mounted(){
        window.addEventListener('resize',this.printArr);
    },
    //Vue2
    beforeUnmount(){
        window.removeEventListener('resize',this.printArr);
    }
}
</script>
```
* 被自定义事件引用，组件销毁时未清除
```vue
<script>
export default{
    data(){
        return {
            arr:[10,20,30]
        }
    },
    methods:{
        printArr(){
            console.log(this.arr)
        }
    },
    mounted(){
        event.on('showMsg',this.printArr)
    },
    //Vue2
    beforeUnmount(){
        event.off('showMsg',this.printArr)
    }
}
</script>
```

前几年前端不太注重内存泄露，因为不像后端7*24小时运行。近几年前端功能不断复杂，内存问题也要重点考虑。
那么闭包是内存泄露吗？

严格意义上来说闭包不算内存泄露，内存泄露是非预期的情况，想让它 回收但是它没回收。而闭包是符合预期的。

## vdom真的很快吗？
vdom也就是Virtual DOM 虚拟dom，vue和react都使用vdom实现内部组件的更新，它是用JS对象来模拟DOM节点数据，由React最先推广使用。

Vue、React相比于jquery时代，它的价值是什么呢？
1. 组件化，组件化在很早就有了，后端使用JSP、PHP的时候组件化就已经有了，包括后来有新的标准Web Components。所以组件化是承接之前技术的一个基本使用，它是一个必要条件
2. 数据视图分离、数据驱动视图--这是核心，只关注业务数据，而不用关心DOM变化

现在很多初学的前端工程师，一上来使用Vue、React，对DOM操作不太熟练，慢慢变成了Vue工程师。

那么如何实现数据驱动视图呢？那就使用vdom

所以vdom并不快，JS直接操作DOM才是最快的。但数据驱动视图要有合适的技术方案，不能全部DOM重建，vdom就是目前最合适的技术方案(并不会因为它快，而是合适)

## 浏览器和nodejs事件循环的区别
JS是单线程的(无论是浏览器还是nodejs)，浏览器中JS执行和DOM渲染共用一个线程，JS执行就暂停DOM渲染，因此异步就是解决这个问题而诞生，如果没有异步的话，同步执行JS就无法渲染DOM，渲染DOM就无法执行JS。

异步中又分为宏任务和微任务，宏任务就是常见的setTimeout、setInterval、网络请求，微任务就是promise、async/await。微任务在下一轮DOM渲染之前执行，宏任务在之后执行。因此微任务执行的更早一些，

Nodejs同样使用ES语法，也是单线程，也需要异步，异步任务也分宏任务和微任务。但是它的宏任务和微任务，分不同类型，有不同优先级。
```js
console.log('start')
setImmediate(()=>{
    console.log('setImmediate')
})
setTimeout(()=>{
    console.log('timeout')
})
Promise.resolve().then(()=>{
    console.log('promise then')
})
process.nextTick(()=>{
    console.log('nextTick')
})
console.log('end')
//start
//end
//nextTick
//promise then
//timeout
//setImmediate
```
宏任务类型和优先级从高到低
* Timers - setTimeout setInterval
* I/O callbacks - 处理网络、流、TCP的错误回调
* Idle、prepare - 闲置状态(nodejs内部使用)
* Poll轮询 - 执行poll中的I/O队列
* Check检查 - 存储setImmediate回调
* Close callbacks - 关闭回调，如socket.on('close')

微任务类型和优先级
* 包括promise、async/await、process.nextTick，注意process.nextTick优先级最高

nodejs中event loop，先执行同步代码，然后执行微任务(process.nextTick优先级更高)，按顺序执行6个类型的宏任务(每个结束时都执行当前的微任务)

所以浏览器和nodejs的event loop流程基本相同，nodejs宏任务和微任务分类型，有优先级。

越低级的代码，性能往往越好，用现成的api不知道其内部的复杂度。日常开发别只考虑性能，forEach代码可读性更好，前提是复杂度一致。


## 遍历数组，for和forEach哪个更快
for会更快，forEach每次都要创建一个函数来调用，而for不会创建函数，函数需要独立的作用域，会有额外的开销。

## Vue每个生命周期都做了什么？
1. beforeCreate：在创建之前，创建了一个空白的Vue实例，data、method尚未被初始化，不可使用，也就是这个阶段是一个空白的Vue项目而已，在beforeCreate里面做不了什么东西。
2. created：这个时候Vue实例初始化完成了，也就是Vue的JS对象初始化完成了，然后响应式绑定完了。data、method都已经初始化完成，可以调用了。在created中与页面、DOM节点没有关系的东西和JS模型有关系的东西可以做了，比如获取一些属性，但是尚未开始渲染模板，Vue实例和模板还未发生关联，所以不要做与模板有关的事情。
3. beforeMount：在渲染之前，编译模板，调用render生成vdom。还没有开始渲染DOM。
4. mounted：完成DOM渲染，组件创建完成，开始由创建阶段进入运行阶段。
5. beforeUpdate：data发生变化之后，准备更新DOM，但是尚未更新DOM。
6. updated：data发生变化，DOM更新完成。注意不要在updated中修改data，可能会导致死循环。
7. beforeUnmount：组件进入销毁阶段，尚未销毁，还可使用。可移除、解绑一些全局事件、自定义事件。
8. unmounted：组件被销毁了，所有子组件也都被销毁了。

keep-alive组件有两个生命周期：onActivated缓存组件被激活，onDeactivated缓存组件被隐藏。

Vue什么时候操作DOM比较合适？mouted和updated都不能保证子组件全部挂载完成，所以要用$nextTick渲染DOM

Ajax应该放在哪个生命周期？有两个选择created和mounted，推荐mounted。

Vue3 Composition API生命周期有何区别？用setup代替了beforeCreate和created。使用Hooks函数的形式，如mounted改为onMounted()。

## Vue2 Vue3 React的diff算法有何区别？
Tree diff的优化：只比较同一层级，不跨级比较。tag不同则删掉重建，不再去比较内部的细节。子节点通过key区分(key的重要性)，for循环要有Key，这个key深入到diff算法的优化。优化后的时间复杂度为O(n)。

diff算法非常复杂，不要深究细节。既然是三者的比较，说出他们最大的不同即可。

React diif仅右移，Vue2双端比较，Vue3最长递增子序列。

Vue React为何循环时必须使用key，vdom diff算法会根据key判断元素是否要删除，匹配了key，则只移动元素性能较好。未匹配key，则删除重建性能较差。

## Vue-router的MemoryHistory是什么？
MemoryHistory是适用于Vue3的vue-router，在Vue2中vue-router的abstract模式。

Vue-router三种模式主要是Hash、WebHistory、MemoryHistory(V4之前叫做abstract history)

React-router也有和Vue-router相同的三种模式。

## 知识深度很重要
虽然我们日常干的都是“拧螺丝”“搬砖”的 CURD 工作，也体现不出什么难度，但自身的知识深度真的很重要。工作是公司的、老板的，而能力是自己的，要区分开来。

### 面试评级
面试通过了，到底给你评定 P6 还是 P7 ？依据什么标准呢？
1. 第一个因素不是你的技术，而是团队的预算，例如他们还有没有 P7 的名额。如果有，那可以考虑；如果没有，你能力再好也大不了 P7 。说这个因素是告诉你：如果你的平级不高，不一定是个人的因素。
2. 第二个因素就是你的综合技术能力，而其中技术深度就是最关键的一个。如果你只是浮于表面，从未深入到原理或者源码层面，那就很难有说服力。
3. 大厂不同级别的工资是不一样的，所以技术深度直接决定了你的“钱途”。
### 难题攻坚
在实际工作中，项目遇到了难题，老板可能会直接指派给你，也可能开会时叫人主动认领（此时你要量力而行，不要随意“抢答”）。无论何种方式，你接到了这样一个难题，是否能解决将决定你在领导心目中的形象。

最后，要解决难题，最需要的就是技术深度。否则你都看不清楚问题的本质，何谈解决？
### 同事之间的影响力
同事之间除了聊工作，还有很多私下随性沟通的机会，特别是午饭、午休时间。聊技术，永远是技术人员的话题。

在聊天过程中，大家都会发表个人的评论和观点。如果你有技术深度，看问题更加透彻，解释问题更加清晰，在同事眼中你自然就是一个“厉害的人”。

得到同事的认可和尊重，会增加工作的幸福感。人都有本能的社交需求。
### 注意
所谓技术深度，深了就不可能广。所以，找准某一个方面深入进去即可，不可贪多。而且，要找一个主流的技术栈，如 Vue React 相关的，要考虑技术的实际价值。