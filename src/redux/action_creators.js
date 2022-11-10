// 创建加（increment）的action
export const incrementAction = (data) => {
  return {
    type: 'increment',
    data
  }
}
// 创建减的action
export const decrementAction = (data) => {
  return {
    type: '减',
    data
  }
}
