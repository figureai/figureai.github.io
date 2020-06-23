---
title: ReactNative | bug 合集
date: 2020-03-29 13:27:39
categories:
tags: []
comments: true
---

1. iOS xcode11 以上运行报错 `Unknown argument type ‘attribute’ in method -[RCTAppState getCurrentAppState:error:]. Extend RCTConvert to support this type.`

   > // 解决方案一： 升级 RN 版本到 0.59.9 以上
   > // 解决方案二： `[project_folder]/node_modules/react-native/React/Base/RCTModuleMethod.mm` 文件 第 91 行 `return RCTReadString(input, "__attribute__((unused))") ||`后面添加
   > `RCTReadString(input, "__attribute__((__unused__))") ||` 这一行

2. Xcode 编译项目时出现 config.h not found

   > 原因：Xcode 文件引用出现问题
   > 解决方法：终端项目目录下执行以下两个指令
   > node_modules/react-native/third-party/glog-0.3.4
   > ../../scripts/ios-configure-glog.sh

3. 运行项目突然出现 Make sure you are running a packager server or have included a.bundle file in your application bundle
   > 原因：vpn 开了全局代理，导致找不到项目的 jsbundle 包
   > 解决方法：关闭全局代理即可
4. 终端运行 react-native run-ios 报 could not found iPhone6

   > 原因：Xcode 版本过高，React-Native 版本过低
   > 解决方法：

   ```打开 node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js 文件
   if (!version.startsWith('iOS') && !version.startsWith('tvOS'))
   改为
   if (!version.startsWith('com.apple.CoreSimulator.SimRuntime.iOS') && !version.startsWith('com.apple.CoreSimulator.SimRuntime.tvOS'))
   ```

5. React-Native 向 Web 页面注入代码，调用 window.postMessage() 出现 Setting onMessage on a WebView overrides existing values of window.postMessage, but a previous value was defined

   > 原因：未知
   > 解决方法：

   ```

   render() {
   const patchPostMessageFunction = function() {
   var originalPostMessage = window.postMessage;

               var patchedPostMessage = function(message, targetOrigin, transfer) {
               originalPostMessage(message, targetOrigin, transfer);
               };
               patchedPostMessage.toString = function() {
               return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
               };

               window.postMessage = patchedPostMessage;
               // 这里加入要注入到webview的逻辑

           };
           const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';

           return (
               <WebView injectedJavaScript={patchPostMessageJsCode}/>
           )
       }

   ```

   6. iOS 无法输入中文的问题

   ```
   import React, { Component } from 'react'
   import { Platform, TextInput } from 'react-native'

   export default class LLTextInput extends Component {

      shouldComponentUpdate (nextProps){
         return Platform.OS !== 'ios'
               || (this.props.value === nextProps.value && (nextProps.defaultValue == undefined || nextProps.defaultValue == '' ))
               || (this.props.defaultValue === nextProps.defaultValue && (nextProps.value == undefined || nextProps.value == '' ))
      }
   ```


      render() {
         return <TextInput {...this.props} />
      }

}

7. android 打包报错 `Expected a name but was STRING at line 1 column 99 path $[0].apkInfo.versionName`
   > 把打包路径上的文件夹给删了，然后再打包就好了。
   > 比如我的 apk 是存储在 E:\apk\release 这个路径,然后我就把 release 文件夹给删除了，然后重新打包就好了。
   > 或者你也可以更换一下你的打包路径也可以哦。
