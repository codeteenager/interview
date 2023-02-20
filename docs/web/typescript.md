# TypeScript

## 为什么推荐使用TypeScript？
TypeScript是微软公司开发和维护的一种面向对象的编程语言。它是JavaScript的超集，包含其所有元素。

其中，强类型和弱类型、静态类型和动态类型是两组不同的概念。

类型强弱是针对类型转换是否显示来区分，静态和动态类型是针对类型检查的时机来区分。

TS对JS的改进主要是静态类型检查，静态类型检查有何意义？标准答案是“静态类型更有利于构建大型应用”。

推荐使用TypeScript的原因有：

* TypeScript简化了JavaScript代码，使其更易于阅读和调试。
* TypeScript是开源的。
* TypeScript为JavaScript ide和实践（如静态检查）提供了高效的开发工具。
* TypeScript使代码更易于阅读和理解。
* 使用TypeScript，我们可以大大改进普通的JavaScript。
* TypeScript为我们提供了ES6（ECMAScript 6）的所有优点，以及更高的生产率。
* TypeScript通过对代码进行类型检查，可以帮助我们避免在编写JavaScript时经常遇到的令人痛苦的错误。
* 强大的类型系统，包括泛型。
* TypeScript只不过是带有一些附加功能的JavaScript。
* TypeScript代码可以按照ES5和ES6标准编译，以支持最新的浏览器。
* 与ECMAScript对齐以实现兼容性。
* 以JavaScript开始和结束。
* 支持静态类型。
* TypeScript将节省开发人员的时间。
* TypeScript是ES3、ES5和ES6的超集。

## 说说TypeScript中命名空间与模块的理解和区别
命名空间：命名空间一个最明确的目的就是解决重名问题

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的

这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中

模块：TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块

相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的

它们之间的区别：

* 命名空间是位于全局命名空间下的一个普通的带有名字的 JavaScript 对象，使用起来十分容易。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中
* 像命名空间一样，模块可以包含代码和声明。 不同的是模块可以声明它的依赖
* 在正常的TS项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用

## TypeScript支持的访问修饰符有哪些？
TypeScript支持访问修饰符 public，private 和 protected，它们决定了类成员的可访问性。

* 公共（Public），类的所有成员，其子类以及该类的实例都可以访问。
* 受保护（Projected），该类及其子类的所有成员都可以访问它们。 但是该类的实例无法访问。
* 私有（Private），只有类的成员可以访问它们。

如果未指定访问修饰符，则它是隐式公共的，因为它符合 JavaScript 的便利性。

## TypeScript中有哪些声明变量的方式？
```js
// 声明类型和值，Declaring type and value in a single statement
let [identifier] : [type-annotation] = value; 

// 只声明类型，Declaring type without value
let [identifier] : [type-annotation]; 

// 只声明值，Declaring its value without type
let [identifier] = value; 

// 声明变量无类型和值，Declaring without value and type
let [identifier]; 
```

## TypeScript和JavaScript的区别是什么？
Typescript 是 JavaScript 的超集，可以被编译成 JavaScript 代码。用 JavaScript 编写的代码，在 TypeScript 中依然有效。Typescript 是纯面向对象的编程语言，包含类和接口的概念。 程序员可以用它来编写面向对象的服务端或客户端程序，并将它们编译成 JavaScript 代码。

## TypeScript中的Declare关键字有什么作用？
我们知道所有的JavaScript库/框架都没有TypeScript声明文件，但是我们希望在TypeScript文件中使用它们时不会出现编译错误。为此，我们使用declare关键字。在我们希望定义可能存在于其他地方的变量的环境声明和方法中，可以使用declare关键字。

例如，假设我们有一个名为myLibrary的库，它没有TypeScript声明文件，在全局命名空间中有一个名为myLibrary的命名空间。如果我们想在TypeScript代码中使用这个库，我们可以使用以下代码:

```js
declare let myLibrary;
```

TypeScript运行时将把myLibrary变量赋值为任意类型(any)。这是一个问题，我们不会得到智能感知在设计时，但我们将能够使用库在我们的代码。

## 解释一下TypeScript中的枚举
枚举是TypeScipt数据类型，它允许我们定义一组命名常量。 使用枚举去创建一组不同的案例变得更加容易。 它是相关值的集合，可以是数字值或字符串值。
```js
enum Gender {
  Male,
  Female,
  Other
}
console.log(Gender.Male); // Output: 0

//We can also access an enum value by it's number value.
console.log(Gender[1]); // Output: Female
```

## TypeScript中什么是装饰器？
装饰器是一种特殊类型的声明，它能过被附加到类声明，方法，属性或者参数上，可以修改类的行为

通俗的来说就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能

装饰器的分类: 类装饰器、属性装饰器、方法装饰器、参数装饰器

## TypeScript中的模块是什么？
TypeScript 中的模块是相关变量、函数、类和接口的集合。 你可以将模块视为包含执行任务所需的一切的容器。可以导入模块以轻松地在项目之间共享代码。
```js
module module_name{
  class xyz{
    export sum(x, y){
      return x+y;
    }
  }
}
```

## TypeScript的内置数据类型有哪些？
```js
// 数字类型：用于表示数字类型的值。TypeScript 中的所有数字都存储为浮点值。

let num: number = 1;

// 布尔类型：一个逻辑二进制开关，包含true或false

let str: string = "CoderBin";

// Null 类型： Null 表示值未定义的变量。

let flag: boolean = true

// void 类型：分配给没有返回值的方法的类型。

let unusable: void = undefined;
```
## TypeScript的主要特点是什么？
* 跨平台：TypeScript 编译器可以安装在任何操作系统上，包括 Windows、macOS 和 Linux。
* ES6 特性：TypeScript 包含计划中的 ECMAScript 2015 (ES6) 的大部分特性，例如箭头函数。
* 面向对象的语言：TypeScript 提供所有标准的 OOP 功能，如类、接口和模块。
* 静态类型检查：TypeScript 使用静态类型并帮助在编译时进行类型检查。因此，你可以在编写代码时发现编译时错误，而无需运行脚本。
* 可选的静态类型：如果你习惯了 JavaScript 的动态类型，TypeScript 还允许可选的静态类型。

## TypeScript中never和void的区别？
* void 表示没有任何类型（可以被赋值为 null 和 undefined）。
* never 表示一个不包含值的类型，即表示永远不存在的值。
* 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。

## TypeScript中的类型断言是什么？
类型断言可以用来手动指定一个值具体的类型，即允许变量从一种类型更改为另一种类型。

当你比 TS 更了解某个值的类型，并且需要指定更具体的类型时，我们可以使用类型断言。

## TS中any和unknown有什么区别？
unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查。
```js
let foo: any = 123;
console.log(foo.msg); // 符合TS的语法
let a_value1: unknown = foo;   // OK
let a_value2: any = foo;      // OK
let a_value3: string = foo;   // OK

let bar: unknown = 222; // OK 
console.log(bar.msg); // Error
let k_value1: unknown = bar;   // OK
let K_value2: any = bar;      // OK
let K_value3: string = bar;   // Error
```

因为bar是一个未知类型(任何类型的数据都可以赋给 unknown 类型)，所以不能确定是否有msg属性。不能通过TS语法检测；而 unknown 类型的值也不能将值赋给 any 和 unknown 之外的类型变量

总结: any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。

## 使用TS实现一个判断传入参数是否是数组类型的方法？
unknown 用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，参数总归会有个值，根据这个值的类型进行不同的处理，这里使用 unknown 替代 any 则会更加类型安全。
```js
function isArray(x: unknown): boolean {
  if (Array.isArray(x)) {
    return true;
  }
  return false;
}
```

## tsconfig.json有什么作用？
tsconfig.json文件是JSON格式的文件。

在tsconfig.json文件中，可以指定不同的选项来告诉编译器如何编译当前项目。

目录中包含tsconfig.json文件，表明该目录是TypeScript项目的根目录。
```js
// 常用配置
{
  /*
      tsconfig.json是ts编译器的配置文件，ts可以根据它的信息来对待吗进行编译 可以再tsconfig中写注释
      include : 用来指定哪些文件需要被编译
      exclude : 用来指定哪些文件不需要被编译 ：默认node_module
      extends : 用来指定继承的配置文件
      files   : 用来指定被编译的文件列表，只有编译少量文件才使用
      compilerOptions : 编译器的选项是配置文件中非常重要也是非常复杂的配置选项
  */
  "include":[
    // ** : 任意目录 ， * : 任意文件
    "./src/**/*"
  ],
  "exclude": [
    "./src/hello/**/*"
  ],
  // "extends": "./configs/base",
  "files": [
    "1.ts",
    // "2.ts"
  ],
  "compilerOptions": {
    // 用来指定 ES 版本 ESNext : 最新版。 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
    "target": "ES2020",
    // 指定要使用模块化的规范 : 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6'/'ES2015', 'ES2020' or 'ESNext'
    "module": "ESNext",
    // 用来指定项目中要使用的库 'ES5', 'ES6', 'ES2015', 'ES7', 'ES2016', 'ES2017', 'ES2018', 'ESNext', 'DOM', 'DOM.Iterable',
    //                          'WebWorker', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable', 
    //                          'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown', 
    //                          'ES2016.Array.Include', 'ES2017.object', 'ES2017.Intl', 'ES2017.SharedMemory', 'ES2017.String', 
    //                          'ES2017.TypedArrays', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ESNext.AsyncIterable', 
    //                          'ESNext.Array', 'ESNext.Intl', 'ESNext.Symbol'
    // 运行在浏览器中不用设置，运行在node或其他中才需要设置
    // "lib":[]，
    // 用来指定编译后文件的存放位置
    "outDir":"./dist",
    // 将代码合并为一个文件,设置之后所有的全局作用域中的代码会合并到同一个文件中 但是只能在  'amd' and 'system' 中才能使用
    // "outFile": "./dist/app.js",
    // 是否对js文件进行编译，默认false
    "allowJs": false,
    // 是否检查js代码是否符合语法规范，默认false
    "checkJs": false,
    // 是否移除注释，默认false
    "removeComments":false,
    // 是否不生成编译后文件，默认false
    "noEmit": false,
    // 当有错误时是否生成文件，默认false
    "noEmitOnError": false,
    // 是否生成sourceMap，默认false  这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。有了它，出错的时候，通过断点工具可以直接显示原始代码，而不是转换后的代码。
    "sourceMap":false,

    // 所有的严格检查的总开关，默认false
    "strict": false,
    // 编译后的文件是否开启严格模式，默认false
    "alwaysStrict": false,
    // 不允许隐式的any，默认false(允许)
    "noImplicitAny": false,
    // 不允许隐式的this，默认false(允许)
    "noImplicitThis": false,
    // 是否严格的检查空值，默认false 检查有可能为null的地方
    "strictNullChecks": true,
    // 是否严格检查bind、call和apply的参数列表，默认false  检查是否有多余参数
    "strictBindCallApply":false,
    // 是否严格检查函数的类型，
    "strictFunctionTypes":false,
    // 是否严格检查属性是否初始化，默认false
    "strictPropertyInitialization":false,

    // 是否检查switch语句包含正确的break，默认false
    "noFallthroughCasesInSwitch":false,
    // 检查函数没有隐式的返回值，默认false
    "noImplicitReturns":false,
    // 是否检查检查未使用的局部变量，默认false
    "noUnusedLocals":false,
    // 是否检查未使用的参数，默认false
    "noUnusedParameters":false,

    // 是否检查不可达代码报错，默认false   true，忽略不可达代码 false，不可达代码将引起错误
    "allowUnreachableCode":false
  }
}
```

## TypeScript中什么是类类型接口？
* 如果接口用于一个类的话，那么接口会表示“行为的抽象”
* 对类的约束，让类去实现接口，类可以实现多个接口
* 接口只能约束类的公有成员（实例属性/方法），无法约束私有成员、构造函数、静态属性/方法

## TS中什么是方法重载？
方法重载是指在一个类中定义多个同名的方法，但要求每个方法具有不同的参数的类型或参数的个数。 基本上，它在派生类或子类中重新定义了基类方法。

方法覆盖规则：

* 该方法必须与父类中的名称相同。
* 它必须具有与父类相同的参数。
* 必须存在IS-A关系或继承。

## TS中的类是什么，如何定义？
类表示一组相关对象的共享行为和属性。

例如，我们的类可能是Student，其所有对象都具有该attendClass方法。另一方面，John是一个单独的 type 实例，Student可能有额外的独特行为，比如attendExtracurricular.

你使用关键字声明类class：
```js
class Student {    
  studCode: number;    
  studName: string;    
  constructor(code: number, name: string) {    
      this.studName = name;    
      this.studCode = code; 
  }
}

```
## 如何在TS中实现继承？
继承是一种从另一个类获取一个类的属性和行为的机制。它是面向对象编程的一个重要方面，并且具有从现有类创建新类的能力，继承成员的类称为基类，继承这些成员的类称为派生类。

继承可以通过使用extend关键字来实现。我们可以通过下面的例子来理解它。
```js
class Shape {     
  Area:number     
  constructor(area:number) {     
     this.Area = area    
  }     
}     
class Circle extends Shape {     
  display():void {     
     console.log("圆的面积: "+this.Area)     
  }     
}    
var obj = new Circle(320);     
obj.display() 
```
## TS中的泛型是什么？
TypeScript Generics是提供创建可重用组件的方法的工具。 它能够创建可以使用多种数据类型而不是单一数据类型的组件。 而且，它在不影响性能或生产率的情况下提供了类型安全性。 泛型允许我们创建泛型类，泛型函数，泛型方法和泛型接口。

在泛型中，类型参数写在左括号（<）和右括号（>）之间，这使它成为强类型集合。 它使用一种特殊的类型变量来表示类型
```js
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("CoderBin");
let output2 = identity<number>( 117 );
console.log(output1);
console.log(output2);
```
##  说说TS中的类及其特性
TypeScript 引入了类，以便它们可以利用诸如封装和抽象之类的面向对象技术的好处。

TypeScript 编译器将 TypeScript 中的类编译为普通的 JavaScript 函数，以跨平台和浏览器工作。

一个类包括以下内容：

* 构造器（Constructor）
* 属性（Properties）
* 方法（Methods）

```js
class Employee {
  empID: number;
  empName: string;

  constructor(ID: number, name: string) {
      this.empName = name;
      this.empID = ID;
  }

  getSalary(): number {
      return 40000;
  }
}
```
类的其他特性有：

* 继承（Inheritance）
* 封装（Encapsulation）
* 多态（Polymorphism）
* 抽象（Abstraction）

## 解释如何使用TypeScript mixin
Mixin 本质上是在相反方向上工作的继承。Mixins 允许你通过组合以前类中更简单的部分类来设置构建新类。

相反，类A继承类B来获得它的功能，类B从类A需要返回一个新类的附加功能。

## 什么是TypeScript映射文件？
* TypeScript Map文件是一个源映射文件，其中包含有关我们原始文件的信息。
* .map文件是源映射文件，可让工具在发出的JavaScript代码和创建它的TypeScript源文件之间进行映射。
* 许多调试器可以使用这些文件，因此我们可以调试TypeScript文件而不是JavaScript文件。

## TS中的类型有哪些？
类型系统表示语言支持的不同类型的值。它在程序存储或操作所提供的值之前检查其有效性。

它可以分为两种类型，

* 内置：包括数字(number)，字符串(string)，布尔值(boolean)，无效(void)，空值(null)和未定义(undefined)。
* 用户定义的：它包括枚举(enums)，类(classes)，接口(interfaces)，数组(arrays)和元组(tuple)。

##  TS中的interface和type有什么区别？
相同点：

1. 都可以描述一个对象或者函数

interface
```js
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```

type

```js
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number)=> void;
```
2. 都允许拓展（extends）

interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

不同点

1. type 可以而 interface 不行

type 可以声明基本类型别名，联合类型，元组等类型
```js
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```
type 语句中还可以使用 typeof 获取实例的类型进行赋值
```js
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```
其他骚操作
```js
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```
2. interface 可以而 type 不行

interface 能够声明合并
```js
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```
一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。

## TS中的getter/setter是什么？你如何使用它们？
Getter 和 setter 是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问。

Getters 允许你引用一个值但不能编辑它。Setter 允许你更改变量的值，但不能查看其当前值。这些对于实现封装是必不可少的。

例如，新雇主可能能够了解get公司的员工人数，但无权set了解员工人数。
```js
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string = "";
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}
let employee = new Employee();
employee.fullName = "Bin Coder";
if (employee.fullName) {
  console.log(employee.fullName);
}
```
## 如何检查TS中的null和undefiend？
通过使用一个缓冲检查，我们可以检查空和未定义:
```js
if (x == null) { }
```
如果我们使用严格的检查，它将总是对设置为null的值为真，而对未定义的变量不为真。

例子
```js
var a: number;  
var b: number = null;  
function check(x, name) {  
    if (x == null) {  
        console.log(name + ' == null');  
    }  
    if (x === null) {  
        console.log(name + ' === null');  
    }  
    if (typeof x === 'undefined') {  
        console.log(name + ' is undefined');  
    }  
}  
check(a, 'a');  
check(b, 'b');  
```
输出
```js
"a == null"
"a is undefined"
"b == null"
"b === null"
```

## TypeScript中const和readonly的区别是什么？
* const用于变量，readonly用于属性
* const在运行时检查，readonly在编译时检查
* 使用const变量保存的数组，可以使用push，pop等方法。但是如果使用Readonly Array声明的数组不能使用push，pop等方法

## Omit 类型有什么作用
Omit 以一个类型为基础支持剔除某些属性，然后返回一个新类型。
语法如下
```js
Omit<Type, Keys>
```
使用示例
```js
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
type TodoPreview = Omit<Todo, "description">
```