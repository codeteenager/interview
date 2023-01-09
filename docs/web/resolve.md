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

let obj = {name:'双越'};
changeArg(obj);
console.log('changeArg obj',obj);
```
在这里函数参数是赋值传递的，例如
```js
function fn(x,y){
    //继续操作x，y
}
const num = 100
const obj = {name:"双越"}
fn(num,obj)
```
相当于
```js
const num = 100
const obj = {name:"双越"}
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
 
 