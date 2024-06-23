import {createStore} from 'redux'

// function (state , action) -> reducer
export default createStore(function(state , action ,) {
  if(state === undefined) 
    return {number : 0}
  if(action.type === 'INCREMENT') {
    return {...state , number : state.number + action.size} // 복제
  }
  return state;
  
} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())