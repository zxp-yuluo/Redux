// 引入action对象中的类型（type）
import {INCREMENT, DCREMENT} from './action_types'

// 创建加（increment）的action
export const incrementAction = (data) => ({type: INCREMENT,data})
// 创建减的action
export const decrementAction = (data) => ({type: DCREMENT,data})
