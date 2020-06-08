---
title: js | 不常用函数集合
date: 2020-05-12 14:07:14
categories: 
tags: []
comments: true
---

- 数字年份转大写
```
function date2word(year='2020',month='10',day='05') {
    const dateWord = {
        '0':'零',
        '1':'一',
        '2':'二',
        '3':'三',
        '4':'四',
        '5':'五',
        '6':'六',
        '7':'七',
        '8':'八',
        '9':'九',
        '10': '十'
    }
    const monthWord = {
        '1':'正',
        '2':'二',
        '3':'三',
        '4':'四',
        '5':'五',
        '6':'六',
        '7':'七',
        '8':'八',
        '9':'九',
        '10': '十'
    } 
    // 转换年
    const yearArr = (year+'').split('')
    let yearStr = ''
    yearArr.forEach((value,index)=>{
        yearStr += dateWord[value]
    })

    // 转换月
    let monthStr = ''
    if((month*1) > 10) {
        monthStr = '十'+dateWord[(month*1)%10+'']+'月'
    } else {
        monthStr = monthWord[month*1+''] + '月'
    }

    // 转换日
    let dayStr = ''
    if((day*1)>10) {
        const dayDivide = parseInt(day*1/10)
        const dayRemain = (day*1)%10
        if(dayDivide > 1)  {
            dayStr = dateWord[dayDivide+''] + '十' + dateWord[dayRemain+'']
        } else {
            dayStr = '十' + dateWord[dayRemain+'']
        }
    } else {
        dayStr = '初' + dateWord[day*1+'']
    }
    return {year:yearStr, month: monthStr, day: dayStr}
}
```