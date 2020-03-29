---
title: 正则表达式的使用
date: 2020-03-20 14:53:45
categories: 编程通用
tags: [基础]
comments: true
---



# 正则表达式的使用
> 本文整理了一些常用的正则表达式匹配符，使用的示例代码为js编写，参考文章 [正则表达式手册](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)，[MDN文档-正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expression)

## 正则表达式规则类型
- 断言 
    > 表示一个匹配在某些条件发生

- 边界
    > 表示行和单词的的开始和结尾，如：`^ 匹配起始位置` ，`$ 匹配结束位置`

- 字符类别
    > 区分不同类型的字符，如： `\D 匹配一个非数字字符`，`\d 匹配一个数字字符`

- 组合范围
    > 表示表达式的分组和范围，如: `[a-e0-4] 匹配a-e之间的字符以及0-4的数字`

- 量词
    > 表示匹配的字符或表达式的数量， 如： `a{3,4} 匹配3个或4个字母a的字符`

- unicode属性转义
    > 基于unicode字符属性区分字符


## 常用的匹配规则
> 以下列的是常用匹配规则，完整的匹配规则可参考：[正则表达式手册](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)

 ```
 
 \S     : 匹配任意非空字符
 .      : 匹配 \n 之外的任何字符
 \D     : 匹配一个非数字字符，等价于[^0-9]
 \d     : 匹配个数字字符，等价于[0-9]
 [0-9]  : 匹配一个数字字符
 ^      : 限定字符串的起始字符， 例如  ^a 限定匹配的字符串必须以 a 开头
 $      : 限定字符串的结束字符，例如 b$ 字符串必须以b结束
\w      : 匹配包括下划线的任何单词或数字，等价于[A-Za-z0-9_]
{}      : 匹配指定次数，eg: a{3,6}，最低匹配三个字符a，最高匹配6个字符a
()      : 优先匹配括号中的内容
+       : 至少匹配一次，等价于{1,}

 ```

 ## 全局匹配模式
> 全局匹配模式即在匹配到第一个字符串后，会继续往后检索，直到检索完所有内容

```
const str = '123bb456bb789'

// 输出 [ 'bb', 'bb' ]
console.log(str.match(/bb/g)) 

const reg = new RegExp("bb","g")
// 输出 [ 'bb', index: 3, input: '123bb4567bb89', groups: undefined ]
console.log(reg.exec(str))

```


 ## js 字符串支持正则表达式的方法

 ```
const str = '123bb456d789'

// search(reg): 检索与reg相匹配的值
// 输出： 3
console.log(str.search(/b{2}/))  

// match(reg): 找到一个或多个reg匹配的值
// 输出： [ '456', index: 5, input: '123bb456d789', groups: undefined ]
console.log(str.match(/[4-6]{3}/))

// replace(reg, str): 替换与reg匹配的值为str的内容
// 输出： 123bb4561119
console.log(str.replace(/d[7-8]{2}/, '111'))

// split(reg, number): 把字符依照reg匹配规则分割，并且返回一个number长度的数组
// 输出： [ '123bb', 'd789' ]
console.log(str.split(/456/, 2))

 ```

## js RegExp对象

```
complie: 编译正则表达式。
exec: 检索字符串中指定的值。返回找到的值，并确定其位置。
test: 检索字符串中指定的值。返回 true 或 false。
```


## 常用的正则表达式

```
// 获取网络链接中的某个参数值
// gcGetUrlParam（url,params） {
//     var reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)");
//     var result = url.search.substr(1).match(reg);
//     if (result && result[2]) {
//         return result[2];
//     }
//     return false;
// }

// 裁剪xx到xx之间的任意内容
// let url = https://www.v.qq.com/?vid=adfadsfds2243&test=true
// let reg = /vid=(.*?)&/
// let vid = url.match(reg)[1]

// 验证手机号码正则
// let reg = /^1([3-8])(\d{9})$/
// let test = '13160694978'
// let a = reg.exec(test)
// console.log(a)

// 验证邮箱的正则
// let reg = /^((\S|_|-){2,10})@(\S{2,6})(.com)$/
// let test = 'some_one@gmail.com'
// let a = reg.exec(test)
// console.log(a)

// 匹配任意重复字符
// var s = 'aaabccc11fdsaa';
// var reg = /(.)\1+/g;
// console.log(s.match(reg)); //["aaa", "ccc", "11"]
```
 