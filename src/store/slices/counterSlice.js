import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
    title: "redux toolkit pre"
  },
  reducers: {
    increment(state,action) {
      state.value ++
    },
    decrement(state,action) {
      state.value -= 1
    }
  }
})
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice;