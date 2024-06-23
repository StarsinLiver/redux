// 부속화

import React , { Component } from "react";
import DisplayNumber from "../react_redux_components/DisplayNumber";
import store from '../store/store'

export default class extends Component {
  state = {number : store.getState().number}
  constructor (props) {
    super(props);
    store.subscribe(function() {
      this.setState({number :  store.getState().number});
    }.bind(this))
  }

  render () {
    return <DisplayNumber number={this.state.number}></DisplayNumber>
  }
}