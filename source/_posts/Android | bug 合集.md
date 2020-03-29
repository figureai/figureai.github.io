---
title: Android | bug 合集
date: 2020-03-26 23:11:28
categories: Android
tags: [Android]
comments: true
---

1. You should manually set the same version via DependencyResolution
> 报错原因： 项目添加的第三方库依赖的版本不一致

```
// 解决方案一 ： 升级Android X
// 解决方案二 ： 项目级 gradle 文件下添加以下配置
subprojects {
    configurations.all {
        resolutionStrategy.eachDependency { DependencyResolveDetails details ->
            def requested = details.requested
            if (requested.group == 'com.android.support') {
                if (!requested.name.startsWith("multidex")) {
                    details.useVersion '25.4.0'
                }
            }
        }
    }
}

```

