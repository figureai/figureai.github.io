
---
title: redux、react-redux、redux-thunk结合使用
date: 2020-05-08 15:27:09
categories: 
tags: []
comments: true
---


## 简单介绍

- redux
> redux是一个统一数据流状态管理的js库，本身使用与react、或者vue框架等无关。

- react-redux
> 将redux应用到react上的库。

- redux-thunk
> redux-thunk，redux 的一个中间件，可以实现在使用redux时发异步action。


## 什么时候需要使用redux
> 当你的应用有许多动态数据需要在不同的页面共享时，比如说当用户修改了账户昵称之后所有的相关页面都要更新昵称，面对这样的需求，如果不使用redux，则需要通过发送通知或者数据传递的方式来解决，而使用redux则可以大大简化操作。

## redux 核心概念

- Store
> Store 是 redux存放数据的地方，每个应用有且只有一个store，比如说修改昵称那个例子，昵称字段（假设为nickName）就需要存放在store中，其他用到的页面也是从store获取，当store中的nickName更新时，所有用到的页面或组件就会自动更新。

```
import {createStore} from 'redux'
import rootReducers from './reducers/index'

// 创建一个storage 
const store = createStore(
    rootReducers,
)

export default store
```

- Reducer
> reducer 是用来计算组成state的纯函数，每个reducer都会接收一个旧的state和action，并且返回一个新的state，需要注意的是，reducer是一个纯函数，固定的输入会得到固定输出，因此要避免在reducer中修改传入的参数，或者使用`Date.now()`、`Math.random()`。
```
// reducer 接收旧的state和新的action，返回新的state
const counterReducer = function(state={count:1}, action) {
    switch(action.type) {
        case 'COUNT_ADD':
            return {...state, count: state.count+1}

        case 'COUNT_REDUCE':
            return {...state, count: state.count-1}
        default:
            return state
    }
}

export default counterReducer
```

- Action
> 如果需要修改state中的数据，就需要通过分发action的方式来修改`(Store.dispatch(action))`，action包含type和payload字段，type定义了action的类型，payload则是此次action携带的数据。

```
// action包含type和payload属性，reducer拿到action可以通过type进行相应的逻辑处理
const addAction = () => {
    return {
        type: 'COUNTER_ADD',
        payload: {}
    }
}

const reduceAction = () =>{
    return {
        type: 'COUNTER_REDUCE',
        payload: {}
    }
}

export {
    addAction,
    reduceAction,
}
```

## redux 设计原则
```
1. 单一数据源：所有状态都保存在单一的store中
2. state是只读的: 不能直接对store进行修改,只能通过新的store替换旧的store
3. 使用纯函数来执行修改:reducer是只读的
```

![redux数据流流程图](https://tva1.sinaimg.cn/large/007S8ZIlgy1gemavjob2pg31400u0npe.gif)

## react-redux 的作用
> react-redux 能将redux那套逻辑应用在react框架上。

### react-redux 核心 api

- Provider
> 通过Proveder可以把redux和react建立连接，将store传递到react项目中

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    // 通过Proveder把redux和react建立连接，将store传递到react项目中
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
```

- connect

> 使用到store中数据的组件，需要先用connect修饰一遍
```
// 将 指定 的 store 合并到 props 传给组件
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.postReducer
    }
} 

// 将 指定的 dispatch 合并到 props 传给组件
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        test: ()=>{
            dispatch(loadPostsAction)
        }
    }
}

// HomeScreen经过connect 包装就可以使用 mapStateToProps，mapDispatchToProps 传递过去的数据了
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen) 
```

## redux-thunk 的作用
> redux-thunk 是 redux的一个中间件，可以实现发异步action，因为有一些action携带的数据可能是由后台获取的，这时候就需要redux-thunk的协助了。

- 使用中间件
```
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers/index'

// 创建一个storage storage 接收一个参数，reducer
const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...[thunk,]),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

export default store
```

- 发送异步action
```
import {getPosts} from '../services/post_api'

const loadPostsAction = async (dispatch)=>{
    const {data} = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        payload: data
    })
}

export {
    loadPostsAction
}
```


>本文demo：[redux使用示例](https://github.com/figureai/StudyBase/tree/master/redux.base)

>参考文章： 
    [Redux for react native 指南](https://juejin.im/post/5bac26ad6fb9a05d353c8040)，
    [Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html#comment-text)


