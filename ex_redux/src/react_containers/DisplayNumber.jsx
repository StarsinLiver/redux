// 부속화 ==> connect
import DisplayNumber from "../react_redux_components/DisplayNumber";
import {connect} from 'react-redux'

// connect 는 인자가 두개임
// mapStateToProps , mapDispatchToProps 

// mapStateToProps : store 의 값이 변경될 때 마다 리덕스 state 를 react props 로 보내겠다.
// state 는 인자로 받도록 기본 설정 되어있음 
function mapReduxStateToReactProps(state) {
  return {
    number : state.number
  }
}

// mapDispatchToProps : AppNumber 에서 정확히
function mapReduxDispatchToReactProps() {
  return {}
}

// 또한 connect 는 함수를 return 하는데 이때 인자는 Component 를 받음
// 따라서 여기서는 DisplayNumber 가 들어감


export default connect (mapReduxStateToReactProps , mapReduxDispatchToReactProps)(DisplayNumber);

//! 밑과 동일한 뜻이 됨
// import React , { Component } from "react";
// import DisplayNumber from "../react_redux_components/DisplayNumber";
// import store from '../store/store'

// export default class extends Component {
//   state = {number : store.getState().number}
//   constructor (props) {
//     super(props);
//     store.subscribe(function() {
//       this.setState({number :  store.getState().number});
//     }.bind(this))
//   }

//   render () {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>
//   }
// }