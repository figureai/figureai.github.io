---
title: 关于js的this指向问题
date: 2020-03-23 11:17:10
categories: JavaScript
tags: []
comments: true
---

[toc]

# 关于 js 的 this 指向问题

> 一直以来对于 js 的 this 指针这一块理解都是比较模糊，也有查阅过相关资料，但是时间一长又会忘记，所以这篇文章单独记录一下 this 指针的指向问题，一方面加深记忆，一方面也方便自己查阅

## 要点

> this 的指向不是在函数定义的时候确定的，而是在函数调用的时候确定的，换句话说，函数的调用方式决定了 this 的指向，所以理解 this 的指向问题，最简单的方法就是通过分析 js 几种函数的调用模式。js 函数的调用模式有：**函数调用模式**、**方法调用模式**、**构造函数调用模式**、**apply 和 call 调用模式**、**以及箭头函数**

## 函数调用模式

> 函数被直接调用时，其实是作为属性挂载在**全局对象下**，所以这种模式**在浏览器环境**下 this 自然指向**window 对象**

![函数调用模式下的this指向](https://tva1.sinaimg.cn/large/00831rSTgy1gd42s9x2hrj30ht03kdg1.jpg)

## 方法调用模式

> 当函数被保存为一个对象的属性，通过对象 **.**或者 **[]**调用时，称为方法调用模式，这种情况 this 被绑定在调用的对象上。

1. 一层嵌套

```

//
const dict = {
    name: 'dict',
    test: function() {
        console.log(this.name)
    }
}

// 打印 dict
dict.test()

```

2. 对象多重嵌套
   > 这种情况下，不管是嵌套多少层，this 都会指向到调用他的对象上

```
const first = {
    name: 'first',
    second: {
        name: 'second',
        test: function() {
            console.log(this.name)
        }
    }

}

// 这里因为调用test方法是second对象，所以指向对象是second
first.second.test()
```

3. 方法被赋值为一个新对象
   > 这种情况下相当于回到函数调用模式

```
const first = {
    name: 'first',
    second: {
        name: 'second',
        test: function() {
            console.log(this.name)
        }
    }
}

name = 'a'

// 打印 a，这里因为a是挂载在全局对象下，所以this自然指向全局对象
const a = first.second.test
a()
```

## 构造函数调用模式

> 如果函数在被 new 关键字创建为一个新的实例对象，那么这个函数就成为此对象的构造函数，如果**构造函数不返回对象，this 就指向这个实例。**

```
// 构造函数不返回对象，this指向实例
function Fn() {
    this.name = 'hello'
}

const a = new Fn()

console.log(a.name)


```

## call 和 apply 调用模式

> js 中的函数也是对象，所有函数都有两个方法 **call 和 apply**，这两个方法可以让我们构建一个参数数组传递给调用函数，同时也允许我们改变 this 的指向

```
name = 'window'

function getName() {
    console.log(this.name)
}

const a = {
    name: 'objA'
}

getName.apply(a)    // objA
getName.call(a)     // objA
getName.apply()     // window
getName.call()      // window
```

## 注意

> 以下代码中是用 es6 的 class 定义的一个方法，这段代码在 es5 的环境下理论上应该是输出 'window'，但是实际运行 this 的指向会变成 undefined，猜测应该是 es6 的 class 关键字做了优化。

```
// es6
name = 'window'
class A {
    constructor(name) {
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}
const a = new A('objA')
const test = a.getName
// 报错
test()

// es5
name = 'window'
function A(name) {
    this.name = name
}
A.prototype.getName = function() {
    console.log(this.name)
}
const a = new A('objA')
const test = a.getName
// 打印window
test()
```
