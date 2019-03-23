import createStore from './../createStore';

function candyReducer(state = {candy: []}, action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

export default candyReducer;

let candyStore = createStore(candyReducer);
candyStore.dispatch({ type: "@@INIT"});
