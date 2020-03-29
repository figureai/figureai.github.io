---
title: 提高github搜索精确度
date: 2020-03-21 08:24:58
categories: 高效操作
tags: [github,效率]
comments: true
---

```
// xxx 代表搜索内容
// 在项目名进行精确搜索
in:name xxx

// 搜索名字包含xxx，stars数量大于3000的项目
in:name xxx stars:>3000

// 搜索名字包含xxx，forks大于100的项目
in:name xxx forks:>100

// 搜索readme包含xxx的项目
in:readme xxx

// 搜索描述包含xxx的项目
in:description xxx

// 搜索xxx语言编写，名字包含xxx的项目
in:name xxx language:xxx

// 搜索最后一次更细时间在2019年9月3日之后的项目
xxx pushed:>2019-09-03

// 
```