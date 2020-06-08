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

2. android 打包报错 `Expected a name but was STRING at line 1 column 99 path $[0].apkInfo.versionName`
>把打包路径上的文件夹给删了，然后再打包就好了。
比如我的apk是存储在E:\apk\release这个路径,然后我就把release文件夹给删除了，然后重新打包就好了。
或者你也可以更换一下你的打包路径也可以哦。