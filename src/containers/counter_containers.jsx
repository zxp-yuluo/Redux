// counter的容器组件，起到一个连接作用
import counter from "../components/counter";
import { connect } from "react-redux";
import {incrementAction,decrementAction} from '../redux/action_creators'

// 从redux中把state取出来，以props的形式给UI组件
const mapStateToProps = (state) => {
  // 该方法的返回值，会作为props参数传递。相当于<Counter count={state} />
  return {
    count: state
  }
}
// 从redux中把dispatch取出来，以props的形式给UI组件
const mapMethodToProps = (dispatch) => {

  return {
    // 该方法的返回值，会作为props参数传递。相当于<Counter increment={操作方法dispatch} />
    increment: (data) => {
      return dispatch(incrementAction(data))
    },
    // 该方法的返回值，会作为props参数传递。相当于<Counter decrement={操作方法dispatch} />
    decrement: (data) => {
      return dispatch(decrementAction(data))
    }
  }
}

export default connect(mapStateToProps,mapMethodToProps)(counter)