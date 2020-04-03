---
title: ReactNative | bug 合集
date: 2020-03-29 13:27:39
categories:
tags: []
comments: true
---

1. iOS xcode11 以上运行报错 `Unknown argument type ‘attribute’ in method -[RCTAppState getCurrentAppState:error:]. Extend RCTConvert to support this type.`

> // 解决方案一： 升级 RN 版本到 0.59.9 以上
> // 解决方案二： [project_folder]/node_modules/react-native/React/Base/RCTModuleMethod.mm 文件 第 91 行 return RCTReadString(input, “**attribute**((unused))”) || 后面添加
> RCTReadString(input, “**attribute**((**unused**))”) || 这一行
