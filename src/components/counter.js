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
    // if (count % 2 === 0) return
  }

  // 两秒后加
  const asyncIncrement = () => {
    const value = selectValue.current.value * 1
    setTimeout(() => {
      
    }, 2000)
  }
  return (
    <div className="App">
      <div>count：100</div>
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