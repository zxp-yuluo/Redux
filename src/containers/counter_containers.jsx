// counter的容器组件，起到一个连接作用
import counter from "../components/counter";
import { connect } from "react-redux";

// 从redux中把state取出来，以props的形式给UI组件
const mapStateToProps = (state) => {
  // 该方法的返回值，会作为props参数传递。相当于<Counter count={state} />
  return {
    count: state
  }
}

export default connect(mapStateToProps)(counter)