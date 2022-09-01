## Fundamentals-Part-1
### Date Types
    String  Number  Boolean  Undefined  Null  Symbol(ES2015)  BigInt(ES2020)

### let const and var
    let Block scope
    var Function scope

###  Basic Operators
#### Math operators
    2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
#### Assignment operators
#### Comparison operators

### Operator Precedence （运算符优先级）

### Strings and Template Literals(字面量)

### Taking Decisions if / else Statements

### Type Conversion and Coercion /koʊˈɜːrʒn/

### Truthy and Falsy Values
    5 falsy values: 0, '', undefined, null, NaN

### Equality Operators_ == vs. ===

### Boolean Logic

### Logical Operators

### The switch statement

### Statements and Expressions(语句和表达式)

### The Conditional(Ternary) Operator（三元运算符）

### JavaScript Releases_ ES5, ES6+ and ESNext


## Fundamentals-Part-2

### Activating Strict Mode(激活严格模式)
#### js文件首行添加"use strict"

### Functions
####  calling / running / invoking function

### Function Declarations vs. Expressions(函数声明式与函数表达式)

### Arrow Functions

### Functions Calling Other Functions

### Introduction to Arrays

### Basic Array Operations(Methods)

### Introduction to Objects

### Dot VS. Bracket Notation

### Objects Methods
#### this指向调用该方法的对象

### Iteration_ The for Loop

### Looping Arrays, Breaking and continuing
#### continue break

### Looping Backwards and Loops in Loops

### The while Loop
#### Math.trunc 将数字的小数部分去掉，只保留整数部分。


## Developer Skills & Editor Setup


## HTML & CSS Crash Course


## JavaScript in the Browser. Dom Manipulation Fundamentals


## How JavaScript Works Behind the Scenes

### An High-Level OverView of Javascript

#### javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threader, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model

#### paradigm(范式): an approach and mindset of structuring code, which will direct your coding style and technique
    1 procedural programming
    2 Object-oriented programming
    3 Functional programming

### 090 The Javascript Engine and RunTime
#### js Engine: 执行js代码的计算机程序（V8），引擎组件以及如何工作？一个调用栈（call stack）和一个堆（memory heap）
#### Compilation: Entire code is converted into machine code at once, and writted to a binary file that can be executed by a computer
#### Interpretation: Interpreter runs through the source code and executes it line by line
#### Just in Time(JIT) compilation: Entire code is converted into machine code at onece, then execution immediately

### Execution Contexts and The Call Stack
#### js代码是如何执行的? 
#### Execution Context Detail: (Generated during "creation phase", right before execution)
    1. Variable Environment
        let const var
        Functions
        arguments Object (not in arrow functions)

    2. scope chain

    3. this keywords (not in arrow functions)


#### Call Stack: "Place" where execution context get stacked on top of each other, to keep track where we are in the execution

### Scope and The Scope Chain
#### 相关概念，为什么如此重要，如何工作
1. Scoping: How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"(我们程序的变量是如何组织和访问的。 “变量存在于哪里？” 或“我们在哪里可以访问某个变量，在哪里不能访问？”)

2. Lexical Scoping: Socping is controlled by placement of functions and blocks in the code;(socping由代码中的函数和块的位置控制)

3. Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope;(声明某个变量的空间或环境（如果是函数，则为变量环境）。 有全局作用域、函数作用域和块作用域；)

4. Scope of variable: Region of our code where a certain variable can be accessed.(可以访问某个变量的代码区域。)
#### block scope(let const)、function scope(var)

### Scoping in Practice

### Variable Environment_ Hoisting and The TDZ(变量声明提升)

### Hoisting and TDZ(temporal dead zone) in Practice
#### why TDZ? Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided

### Hoisting and TDZ in Practice

### The this Keyword

### The this keyword in Practice

### Regular Functions vs Arrow Functions

## Data Structures, Modern Operators and Strings


## A Closer Look at Functions
### Closure
#### A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone(闭包是创建函数的执行上下文的封闭变量环境，即使在该执行上下文消失后也是如此)
#### 闭包使得一个函数可以永远保持对创建它时的作用域中的变量访问，即使该执行上下文已经在调用栈中返回


## Working With Arrays
### at reduce entries flat flatMap

## OOP
#### getter setter, 设置一个已存在的属性时，需约定个额外变量（下滑线开头）替换

#### Object.created(): 创建一个对象，且对象的__proto__为传入的参数

#### instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

#### Inheritance Between "Classes"
    1. Constructor Functions: 子类中父类.call(this) + Object.create
    2. ES6 Classes: extends + super() // 最常用
    3. Object.create: 子对象.init中父对象.init.call(this) + Object.create

#### 数据封装 数据隐私：防止代码/类内的数据从类外意外错误操作
    1. 公共属性(public fields) class内，constructor外定义
    2. 私有属性(private fields) #（井号/哈希开头）提案中...
    3. 公共方法(public methods/interface)
    4. 私有方法(private methods) #（井号/哈希开头）提案中...(chrome会当成私有属性处理)



