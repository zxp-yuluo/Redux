import { createSlice } from '@reduxjs/toolkit'
const stuSlice = createSlice({
  initialState: {
    name: '赵书菊',
    age: 18,
    sex: 'nv'
  },            // 初始化数据
  name: 'xp',  // 用来自动生成action中的type
  reducers: {   // 指定state的各种操作
    setName(state,action){
      // 可以通过不同的方法，来指定对state的不同操作
      // state是一个代理对象，并不是直接把原来的state返回了，可以直接修改
      state.name = "张晴"  // 不需要复制后再去修改
    },
    setAge(state,action) {
      state.age = 19
    }
  }
})

console.log(stuSlice.actions);

// actions中存储的是slice自动生成的action创建器(函数)， 调用后会自动创建action对象
// action对象结构是 {type：name/函数名，payload：函数的参数}
export const { setName, setAge} = stuSlice.actions

export default stuSlice;

console.log(setName('payload接收'));
console.log(setAge({name: 'Tom',age: 16}));