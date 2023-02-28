# 数据结构与算法
数据结构和算法，是大厂前端面试的“拦路虎”。为何要考察呢？如果在短时间之内快速判断一个工程师是否优秀？辨别优秀工程师从鉴别成本和成功率的方面考虑，它的算法不一定是很厉害的，但是是过关的，所以考察算法是最合理的方式 —— 这是业界多年的经验积累。

另外现在前端的工作范围越来越广，前端可以做服务端、客户端、PC端大型业务系统等，越来越广那么要求越来越高。

考察的重点：
* 算法的时间复杂度和空间复杂度 
* 三大算法思维：贪心，二分，动态规划 
* 常见数据结构

### 什么是复杂度
复杂度是程序执行时的计算量和内存空间(和代码是否简介无关)，它是一个数量级(方便记忆、推广)，不是数字。复杂度一般是针对一个具体的算法，这个算法可能是一个函数，而非一个完整的系统。

数量级用O()来表示，比如：O(1)一次就够(数量级)，O(n)和传输的数据量一样(数量级)，O(n^2)数据量的平方(数量级)，O(logn)数据量的对数(数量级)，O(n*logn)数据量*数据量的对数(数量级)，其中logn可以理解为一个二分的循环算法。

## 为什么要学习数据结构与算法
当我们通过框架或工具来开发的时候，其实我们对框架或工具的影响度较低，就算我们可以通过配置进行内部的处理，但是核心还是由库和框架决定的。那么我们希望优化我们的程序，那么从哪方面入手呢？这时候我们可以利用数据处理操作优化功能，这里就需要使用数据结构和算法的相关内容。

那么我们常说数据结构+算法=程序，数据结构我们在开发中比较常用，例如数组，算法常用的像排序算法。利用特定的数据结构和算法对我们的程序书写的复杂度会有一个简化，让代码化繁为简，其次也能提升代码程序的性能，另外也能提升面试通过率。

## 栈
栈是一种遵从后进先出原则的有序集合，添加新元素的一端称为栈顶，另一端称为栈底。操作栈的元素时，只能从栈顶操作(添加、移除或取值)。

栈需要实现以下功能：
* push()入栈方法
* pop()出栈方法
* top()获取栈顶值
* size()获取栈的元素个数
* clear()清空栈

```js
class Stach{
    constructor(){
        //存储栈的数据
        this.data = [];
        //记录栈的数据个数(相当于数组的Length)
        this.count = 0;
    }

    //push()入栈方法
    push(item){
        //方式1：数组方法push添加
        //this.data.push(item)
        //方式2：利用数组长度
        //this.data[this.data.length] = item
        //方式3：计数方式
        this.data[this.count] = item;
        //入栈后，count自增
        this.count++;
    }

    //pop()出栈方法
    pop(){
        //出栈的前提是栈中存在元素，应先行检测
        if(this.isEmpty()){
            console.log('栈为空!');
            return;
        }
        //移除栈顶数据
        //方式1：数组方法pop移除
        //return this.data.pop();
        //方式2：计数方式
        const temp = this.data[this.count -1];
        delete this.data[--this.count];
        return temp;
    }
    //检测栈是否为空
    isEmpty(){
        return this.count === 0;
    }
    //top()用来获取栈顶值
    top(){
        if(this.isEmpty()){
            console.log('栈为空');
            return
        }
        return this.data[this.count - 1];
    }
    //size()获取元素个数
    size(){
        return this.count;
    }
    //clear()清空栈
    clear(){
        this.data = [];
        this.count = 0;
    }
}
```

## 队列
队列是一种遵循先进先出原则的有序集合，添加新元素的一端称为队尾，另一端称为队首。

队列需要实现以下功能：
* enqueue()入队方法
* dequeue()出队方法
* top()获取队首值
* size()获取队列元素个数
* clear()清空队列

基于数组实现队列
```js
class Queue{
    constructor(){
        //用于存储队列数据
        this.queue = [];
        this.count = 0;
    }
    //入队方法
    enqueue(item){
        this.queue[this.count++] = item;
    }
    //出队方法
    dequeue(){
        if(this.isEmpty()){
            return;
        }
        //删除queue的第一个元素
        //delete this.queue[0]
        //利用shift移除数组第一个元素
        this.count--;
        return this.queue.shift();
    }
    isEmpty(){
        return this.count === 0;
    }
    //获取队首元素值
    top(){
        if(this.isEmpty()){
            return;
        }
        return this.queue[0];
    }
    size(){
        return this.count;
    }
    clear(){
        this.queue = [];
    }
}
```
基于对象实现队列
```js
class queue{
    constructor(){
        this.queue = {};
        this.count = 0;
        //用于记录队首的键
        this.head = 0;
    }
    //入队方法
    enqueue(){
        this.queue[this.count++] = item;
    }
    //出队方法
    dequeue(){
        if(this.isEmpty()){
            return;
        }
        const headData = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        this.count--;
        return headData;
    }
    isEmpty(){
        return this.count === 0;
    }
    clear(){
        this.queue = {};
        this.count = 0;
        this.head = 0;
    }
}
```

### LeetCode精选题目
包含min函数的栈

## 排序算法复杂度
|  排序算法 | 平均时间复杂度 | 最好情况 | 最坏情况 |空闲复杂度 | 排序方式 | 稳定性  |
| -------  | ---------- | --------  |-------- | --------- | ------- | -------- |
| 冒泡排序 | O(n^2) | O(n) | O(n^2) | O(1) | In-place | 稳定 |
| 选择排序  | O(n^2) | O(n^2) |O(n^2) | O(1) | In-place | 不稳定 |
| 插入排序  | O(n^2) | O(n) |O(n^2) | O(1) | In-place | 稳定 |
| 希尔排序  | O(n log n) | O(n log^2 n) |O(n log^2 n) | O(1) | In-place | 不稳定 |
| 归并排序  | O(n log n) | O(n log n) |O(n log n)  | O(n) |Out-place | 稳定 |
| 快速排序  | O(n log n) | O(n log n) |O(n^2) | O(logn) | In-place | 不稳定 |
| 堆排序  |O(n log n) | O(n log n) |O(n log n) | O(1) | In-place | 不稳定 |
| 计数排序  | O(n + K) | O(n + K) | O(n + K)| O(k) | Out-place | 稳定 |
| 桶排序  | O(n + k) | O(n + K)|O(n^2) | O(n + K) | Out-place | 稳定 |
| 基数排序  | O(n x k) | O(n x k) | O(n x k) |O(n + K)| Out-place | 稳定 |

