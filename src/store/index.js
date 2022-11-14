import { configureStore } from '@reduxjs/toolkit'
import stuSlice from './slices/stuSlice'
import counterSlice from './slices/counterSlice'

// 创建store 
const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
    count: counterSlice.reducer
  }
})

export default store