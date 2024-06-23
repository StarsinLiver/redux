import React , {Component} from 'react';
import AddNumber from '../containers/AddNumber'; // 부속화

// 리덕스에 대한 일은 이 container 가 한다.
export default class AddNumberRoot extends Component {
  render(){
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    )
  }
}