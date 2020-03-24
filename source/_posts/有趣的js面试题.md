---
title: 有趣的js笔试题
date: 2020-03-24 14:27:41
categories:
tags: [js]
comments: true
---

[toc]

# 请编写一个 JavaScript 函数 parseQueryString，它的用途是把 URL 参数解析为一个对象

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
console.log(dict)
return dict
}

```

```

```
