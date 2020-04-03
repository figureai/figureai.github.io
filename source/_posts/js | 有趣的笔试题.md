---
title: js | 有趣的笔试题
date: 2020-03-24 14:27:41
categories:
tags: [js]
comments: true
---

**请编写一个 JavaScript 函数 parseQueryString，它的用途是把 URL 参数解析为一个对象**

```
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2....."
var obj = parseQueryString(url);
console.log(obj.key0)
```

答案

```
function parseQueryString(url) {
    const result = url.split('?')
    if(result.length < 2) {
        return {}
    }
    const queryStr = result[1]
    const queryArray = queryStr.split('&')
    let dict = {}
    queryArray.forEach(element => {
        const keyValues = element.split('=')
        dict[keyValues[0]] = keyValues[1]
    });
    return dict
}
```

**尝试实现注释部分的 Javascript 代码，可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）：**

```
var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
    }
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法
    }
}
```

答案

```
var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        // alert(this.msg);
        console.log(this.msg)
    }
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法
        setTimeout(()=>this.shout(), 5000)
    }
    return this
}

const obj = Obj('hello')
obj.waitAndShout()
```

**请给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取空白字符。要求：**

```
console.log(" taobao".trim());     // 输出 "taobao"
console.log(" taobao ".trim());    // 输出 "taobao"
```

答案

```
String.prototype.trim = function() {
    return this.split(' ').join('')
}
```

**请说明下面各种情况的执行结果，并注明产生对应结果的理由。**

```
function doSomething() {
    console.log(this);
}
element.onclick = doSomething // 1. 点击element元素后。 
element.onclick = function() {doSomething()} // 2. 点击element元素后。 
doSomething()   // 3.
```

```
1. 通过函数赋值方式，this直接指向element对象
2. this 是写在doSomething()里边的，而this的指向又跟谁调用它有关，如果没有对象调用它，就是指向window
3. this指向window
```
