import {useSelector,useDispatch} from 'react-redux'
import {increment, decrement} from '../store/slices/counterSlice.js'
const Toolkit = () => {
  // useSelector()用来加载state中的数据
  const {value} = useSelector(state => state.count)
  // useDispatch()获取分发器对象 用来分发state操作命令
  const dispatch = useDispatch()
  const incrementClick = () => {
    dispatch(increment())
  }
  const decrementClick = () => {
    dispatch(decrement())
  }
  return (
    <div>
      <button onClick={incrementClick}>增加</button>
      <span style={{margin: '0 10px'}}>{value}</span>
      <button onClick={decrementClick}>减少</button>
    </div>
  )
}

export default Toolkit