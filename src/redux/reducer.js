// reducer用于加工状态，接受俩个参数（preState，action）
// preState：原来的状态
// action：对象包含事情的类型、事情的数据
// 这里的事情类型为    加（increment）或者减（decrement）

// reducer调用1+n，初始化的时候，用户分发action的时候

// 初始化一个state
let initState = 1000   

const reducer = (preState = initState, action) => {
  const { type, data } = action
  console.log(type, data);
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