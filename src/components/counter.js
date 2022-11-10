import { useRef } from "react"
const Counter = (props) => {
  const selectValue = useRef()
  const { store } = props
  const count = store.getState()
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
    if (count % 2 === 0) return
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
      <div>count：{count}</div>
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