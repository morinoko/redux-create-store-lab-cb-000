export default function createStore(reducer) {
  // add your code here
  let state;
  
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  
  // Set the initial state, as defined in the reducer
  dispatch({type: '@@INIT'});
  
  function getState() {
    return state;
  }
  
  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
