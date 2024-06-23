// 부속화

// wrapping 할 AddNumber 를 불러옴
import React , { Component } from 'react';
import AddNumber from '../redux_components/AddNumber'
import store from '../store/store'
import {connect} from 'react-redux'

// mapDispatchToProps : 
function mapDispatchToProps(dispatch) {
  return {
    onClick : function(size) {
      dispatch({type : 'INCREMENT' , size : size});
    }
  }
}

export default connect(null ,mapDispatchToProps)(AddNumber)

//! 밑과 동일한 코드
/*
export default class extends Component {
  render() {
    return <AddNumber onClick={function (size) {
      store.dispatch({type : 'INCREMENT' , size : size});
    }.bind(this)}></AddNumber>
  }
}*/