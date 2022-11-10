// counter的容器组件，起到一个连接作用
import Counter from "../components/counter";

// 从redux中把state取出来，以props的形式给UI组件
const mapStateToProps = (state) => {

  // 该方法的返回值，会作为props参数传递
  return {
    count: state
  }
}