# redux 简单使用
```text
 警告
 createStore已弃用
 我们建议使用@reduxjs/toolkit包的configureStore方法，它取代了createStore。
```

![](src\img\redux.png)

## store.js

```js
// 引入createStore
import { createStore } from "redux";
// 引入reducer
import reducer from './reducer'

const store = createStore(reducer)

// 导出store
export default store
```

## reducer.js

```js
// reducer用于加工状态，接受俩个参数（preState，action）
// preState：原来的状态
// action：对象包含事情的类型、事情的数据
// 这里的事情类型为    加（increment）或者减（decrement）

// reducer调用1+n，初始化的时候，用户分发action的时候


let initState = 1000   // 初始化一个state

const reducer = (preState = initState, action) => {
  const { type, data } = action
  let newState
  switch (type) {
    case 'increment':
      return newState = preState + data
    case '减':
      return newState = preState - data
    default:
      return preState
  }
}
export default reducer
```

## 组件中使用（不建议直接在组件中引用,欲知原因，且往下看）

```jsx
import { useRef } from "react"
// 引入store  
import store from "../redux/store"
const Counter = () => {
  const selectValue = useRef()

  // 加
  const increment = () => {
    const value = selectValue.current.value * 1
    
  }

  // 减
  const decrement = () => {
    const value = selectValue.current.value * 1
    
  }

  // 如果是奇数就加
  const oddIncrement = () => {
    const value = selectValue.current.value * 1
    // if(count%2 === 0) return
    
  }

  // 两秒后加
  const asyncIncrement = () => {
    const value = selectValue.current.value * 1
    setTimeout(() => {
      
    }, 2000)
  }
  return (
    <div className="App">
          
      {<!--调用getState()方法，这里的值为1000。（reducer中设置的initState）-->}
       
      <div>count：{store.getState()}</div>
      <select ref={selectValue}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={oddIncrement}>奇数+</button>
      <button onClick={asyncIncrement}>异步+</button>
    </div>
  )
}

export default Counter
```

## 从index.js中引用（通过props传递）

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
```

```jsx
// app.js
import Counter from "./components/counter";

function App(props) {

  return <Counter store={props.store} />
  
}

export default App;
```

```jsx
// counter.js
import { useRef } from "react"
const Counter = (props) => {
  const selectValue = useRef()

  // 加
  const increment = () => {
    const value = selectValue.current.value * 1
    
  }

  // 减
  const decrement = () => {
    const value = selectValue.current.value * 1
    
  }

  // 如果是奇数就加
  const oddIncrement = () => {
    const value = selectValue.current.value * 1
    // if(count%2 === 0) return
    
  }

  // 两秒后加
  const asyncIncrement = () => {
    const value = selectValue.current.value * 1
    setTimeout(() => {
      
    }, 2000)
  }
  return (
    <div className="App">
      <div>count：{props.store.getState()}</div>
      <select ref={selectValue}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={oddIncrement}>奇数+</button>
      <button onClick={asyncIncrement}>异步+</button>
    </div>
  )
}

export default Counter
```

## 交互(原因)

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
// 不加这个，state变化，组件不重新渲染
// 检测redux中的数据变化，重新渲染组件
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
})

```

```jsx
// counter.js
import { useRef } from "react"
const Counter = (props) => {
  const selectValue = useRef()
  const { store } = props

  // 加
  const increment = () => {
    const value = selectValue.current.value * 1
    // 分发action
    store.dispatch({
      type: 'increment',
      data: value
    })
  }

  // 减
  const decrement = () => {
    const value = selectValue.current.value * 1
    store.dispatch({
      type: '减',
      data: value
    })
  }

  // 如果是奇数就加
  const oddIncrement = () => {
    const value = selectValue.current.value * 1
    if (store.getState() % 2 === 0) return
    store.dispatch({
      type: 'increment',
      data: value
    })
  }

  // 两秒后加
  const asyncIncrement = () => {
    const value = selectValue.current.value * 1
    setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: value
      })
    }, 2000)
  }
  return (
    <div className="App">
      <div>count：{store.getState()}</div>
      <select ref={selectValue}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={oddIncrement}>奇数+</button>
      <button onClick={asyncIncrement}>异步+</button>
    </div>
  )
}

export default Counter
```

