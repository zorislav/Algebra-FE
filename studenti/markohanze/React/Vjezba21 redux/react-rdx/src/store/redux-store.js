import { createStore } from 'redux';

export const ADD_COUNT = 'ADD_COUNT';
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const RESET = 'RESET';

//definiarit stanje

const initalState = {
  counter: 0
}

//definirati reducer

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case ADD_COUNT:
return { counter: state.counter };
    case SUBTRACT_COUNT:
      return { counter: state.counter };
    case RESET:
return { counter: 0 };
    default:
      return state;

  }
}

//store -> export

const store = createStore(reducer);

export default store;