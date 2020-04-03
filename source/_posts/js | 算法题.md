---
title: js | 算法题
date: 2020-03-24 15:46:10
categories: 算法
tags: [算法, js]
comments: true
---

# 注

> 本文示例代码使用 js 编写=

**冒泡排序**

> 比较相邻的两个元素，如果后一个比前一个大，交换位置

```
const array = [1,2, 0,421,2,33,4,344]
for(let j = 0; j < array.length; j++) {
    for(let k = 0; k < array.length; k++) {
        let a = array[j]
        let b = array[k]
        if(b < a) {
            array[j] = b
            array[k] = a
        }
    }
}
console.log(array)
```

**数组去重**

```
const array = [1,2,3,22,3,2,3,4]

function deleteRepat(array) {
    let dict = {}
    for(let index = 0; index < array.length; index++) {
        dict[array[index]] = index
    }
    return Object.keys(dict)
}

console.log(Object.keys(dict))
```

**字符串转驼峰**

> border-bottom-color ----> borderBottomColor

```

function topUper(str) {
    let result = ''
    const splitArray = str.split('-')
    for(let index = 0; index < splitArray.length; index++) {
        let tempStr = splitArray[index]
        if(index == 0) {
            result = tempStr.toLowerCase()
        } else {
            result += tempStr.charAt(0).toUpperCase() + tempStr.substring(1)
        }
    }
    return result
}

const str = "BBB-bottom-color"
console.log(topUper(str))
```

**查找字符串中出现次数最多的字符串**

```
function getMaxCount(str) {
    const splitArray = str.split('')
    let result = {}
    splitArray.forEach(target => {
        if(result[target] != undefined) {
            result[target] += 1
        } else {
            result[target] = 0
        }
    });

    console.log(result)
    let maxKey = Object.keys(result)[0]
    Object.keys(result).forEach(key => {
        if(result[key] > result[maxKey]) {
            maxKey = key
        }
    })
    return maxKey
}

console.log(getMaxCount('aaaaabbeeeeeeeeeee'))
```

**编写一个产生在 m、n 之间的随机整数的方法**

```

```
