import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNumberRoot from "./react_redux_components/AddNumberRoot";
import DisplayNumberRoot from "./react_redux_components/DisplayNumberRoot";

class App extends Component {
  state = {number : 0};
  render () {
    return (
      <div className="App">
        <h1>Root</h1>
        {/* 일반 react */}
        {/* <AddNumberRoot onClick={function (size) {
          this.setState({number : this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> */}

        {/* react 리덕스 */}
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>

      </div>
    );
  }
}

export default App;
