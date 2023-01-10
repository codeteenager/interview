# 分析和解决问题
遇到一个需求、问题或者一段代码，如何能高效的分析、解决它，这是前端程序员的必备技能。否则你将无法独立工作，这不是企业需要的人才。

为什么要考察呢？
1. 在工作中，大家各司其职，独立解决问题。有问题自己去解决，而不是问领导、问同事。
2. 写代码的本质就是分析问题，然后用代码解决问题。

考察重点：
1. 看懂代码，分析逻辑
2. 能识别代码中的一些坑

## 执行`['1','2','3'].map(parseInt)`输出什么？
```js
['1','2','3'].map(parseInt)
```
首先我们需要知道parseInt的详细定义，`parseInt(str,radix)`，解析一个字符串返回十进制整数，第一个参数str，即要解析的字符串，第二个参数radix，基数(进制)，范围2-36。没有radix的话，当str以`0x`开头，则按照16进制处理，当str以`0`开头，则按8进制处理(但ES5取消了)，其他情况按10进制处理。

其次将代码拆分到最细粒度，我们可以将上述代码拆分成如下：
```js
const nums = ['1','2','3'];
const res = nums.map((item,index)=>{
    //item:'1',index:0
    //item:'2',index:1
    //item:'3',index:2
    return parseInt(item,index);
    //parseInt('1',0) //1
    //parseInt('2',1) //NaN
    //parseInt('3',2) //NaN
});
```
所有看似简洁的代码都要将其拆开，拆到最细，然后去分析每一步的步骤和参数。

## 函数修改形参，能否影响实参
```js
function changeArg(x){
    x = 200;
}
let num = 100;
changeArg(num);
console.log(num);

let obj = {name:'张三'};
changeArg(obj);
console.log('changeArg obj',obj);
```
在这里函数参数是赋值传递的，例如
```js
function fn(x,y){
    //继续操作x，y
}
const num = 100
const obj = {name:"张三"}
fn(num,obj)
```
相当于
```js
const num = 100
const obj = {name:"张三"}
let x = num
let y = obj
```

## 手写convert函数，将数组转为树
```js
const arr = [
    {id:1,name:'部门A',parentId:0},  //0 代表顶级节点，无父节点
    {id:2,name:'部门B',parentId:1},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:2},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
]
```
它的思路是遍历数组，每个元素生成tree node，找到parentNode,并加入它的children。

如何找到parentNode？遍历数组去查找，太慢，可以用一个Map来维护关系，便于查找。

```ts
interface IArrayItem{
    id:number;
    name:string;
    parentId:number; 
}

interface ITreeNode{
    id:number;
    name:string;
    children?:ItreeNode[]
}

function convert(arr:IArrayItem[]): ITreeNode | null{
    //用于id和treeNode的映射
    const idToTreeNode: Map<number,ITreeNode> = new Map();

    let root = null;
    arr.forEach(item => {
        const {id,name,parentId} = item;
        //定义tree node 并加入map
        const treeNode: ITreeNode = {id,name};
        idToTreeNode.set(id,treeNode);

        //找到parentNode并加入children
        const parentNode = idToTreeNode.get(parentId);
        if(parentNode){
            if(parentNode.children==null) parentNode.children = []
            parentNode.children.push(treeNode)
        }
        //找到根节点
        if(parentId===0) root = treeNode
    });
    return root;
}
```
 
 ## 把一个树转换为数组
 ```js
 const obj = {
    id: 1,
    name: '部门A',
    children:[
        {
            id:2,
            name: '部门B',
            children:[
                { id: 4,name:'部门D'},
                { id: 5,name:'部门E'},
            ]
        },
        {
            id:3,
            name: '部门C',
            children:[
                { id: 6,name:'部门F'}
            ]
        }
    ]
 }
 ```

 它的思路是通过广度优先遍历，遍历树节点，为什么要用广度优先呢？如果说要遍历成下面这个结果就要一层一层遍历才能获取到该结果，而深度优先呢则是对每一个可能的分支路径深入到不能再深入为止。所以面试官可能会问结果和下面的不一样。

 ```js
const arr = [
    {id:1,name:'部门A',parentId:0},  //0 代表顶级节点，无父节点
    {id:2,name:'部门B',parentId:1},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:2},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
]
```
然后将树节点转为Array Item，push到数组中，根据父子关系找到Array Item的parentId。

如何查找parentId呢？如果使用遍历树去查找，复杂度为O(n)，太慢，可用一个Map来维护关系，便于查找。
```ts
function convert(root: ITreeNode): IArrayItem[]{
    //Map，记录当前节点的父节点，便于获取parentId
    const nodeToParent: Map<ITreeNode,ITreeNode> = new Map();
    const arr: IArrayItem[] = [];
    //广度优先遍历，定义一个queue
    const queue:ITreeNode[] = [];
    queue.unshift(root); //根节点 入队
    while(queue.length > 0 ){
        const curNode = queue.pop(); //出队
        const {id,name,children = []} = curNode;
        //创建数组item并push
        const parentNode = nodeToParent.get(curNode);
        const parentId = parentNode?.id || 0;
        const item = {id,name,parentId};
        arr.push(item);
        //子节点入队
        children.forEach(child=>{
            //映射parent
            nodeToParent.set(child,curNode);
            //入队
            queue.unshift(child);
        });
    }
    return arr;
}
```
## 构造函数与原型的重名属性
```js
function Foo(){
    Foo.a = function(){console.log(1)}
    this.a = function(){console.log(2)}
}
Foo.prototype.a = function(){console.log(3)}
Foo.a = function(){console.log(4)}
Foo.a()  // 4
let obj = new Foo() //new的时候再关注Foo构造函数内部的内容，里面覆盖了Foo.a，并增加了a属性
obj.a()  // 2，如果当前对象没有a，则执行原型的a
Foo.a()  //1
```
读代码时，要模拟 JS 引擎去执行代码，而不是去阅读代码。

## 一道让人失眠的Promise执行顺序问题
```js
Promise.resolve().then(()=>{
    console.log(0)
    return Promise.resolve(4)
}).then((res)=>{
    console.log(res)
})

Promise.resolve().then(()=>{
    console.log(1)
}).then(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
}).then(()=>{
    console.log(5)
}).then(()=>{
    console.log(6)
})
```
首先我们要知道如果有多个fulfilled promise实例，同时执行then链式调用，then会交替执行。这是编译器的优化，防止一个promise占据太久的时间。

then中如果返回promise实例，相当于多出一个promise实例，也会遵守交替执行，但和直接声明一个promise实例，结果有些差异。then中返回promise实例，会出现慢两拍的效果。第一拍，promise需要由pending变为fulfilled，第二拍，then函数挂载到MicroTaskQueue(参考Event Loop)。

## 对象和属性的连续赋值
```js
let a = {n:1}
let b = a
a.x =a = {n:2}
console.log(a.x) //undefined
console.log(b.x) //{n:2}
```

首先要理解值类型和引用类型，以下执行后是在栈中存储了a、b两个变量各为100，堆没有用。
```js
let a = 100
let b = a
```
下面执行后，在堆中建了一个`{n:1}`的对象，它是引用类型，栈中建了一个a，a指向这个堆中的对象，然后将a的引用赋值给b，b也指向这个堆的对象。
```js
let a = {n:1}
let b = a 
```

其次连续赋值，倒叙执行
```js
let n1,n2

n1 = n1 = 100
```
上面的相当于n2=100，然后n1=n2。

a.x比赋值的优先级高
```js
let a = {}
a.x =100
```
可拆解为`a.x=undefined` 先初始化a.x属性，然后`a.x=100`为x属性赋值。那么上述的代码执行可以理解为：
```js
let a = {n:1}
a.x = a = {n:2}
```
可以拆解为`a.x=undefined`先初始化这个属性，`let x =a.x` x变量是假想的实际不会有，然后`x=a={n:2}`

日常工作中不推荐使用连续赋值，可读性差。

## 对象属性类型问题
第一个题
```js
let a = {},b='123',c=123
a[b] = 'b'
a[c] = 'c'  //a['123'] = c
console.log(a[b]) // c
```
第二个题
```js
let a = {},b=Symbol('123'),c=Symbol('123')
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) //b
```
第三个题
```js
let a = {},b={key:'123'},c={key:'456'}
a[b] = 'b'
a[c] = 'c'
console.log(a[b])  //c
```
这几个题考的就是JS对象key的数据类型，JS对象的key只能是字符串和Symbol类型，其他类型都会被转换为字符串类型，转换字符串会直接调用它的toString方法。

扩展一下，Map的key可以是各种类型，WeakMap的key只能是引用类型，不能是值类型。