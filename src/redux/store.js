// 引入createStore
import { createStore } from "redux";
// 引入reducer
import reducer from './reducer'

const store = createStore(reducer)

// 导出store
export default store
