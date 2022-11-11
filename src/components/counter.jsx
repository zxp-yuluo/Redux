import { useRef } from "react"
const Counter = (props) => {
  const selectValue = useRef()
  // 解构赋值，因为有方法名为increment和decrement，我们起个别名incrementAction和decrementAction
  const {count,increment: incrementAction,decrement: decrementAction} = props
  // 加
  const increment = () => {
    const value = selectValue.current.value * 1
    incrementAction(value)
  }

  // 减
  const decrement = () => {
    const value = selectValue.current.value * 1
    decrementAction(value)
  }

  // 如果是奇数就加
  const oddIncrement = () => {
    const value = selectValue.current.value * 1
    if (count % 2 === 0) return
    incrementAction(value)
  }

  // 两秒后加
  const asyncIncrement = () => {
    const value = selectValue.current.value * 1
    setTimeout(() => {
      incrementAction(value)
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