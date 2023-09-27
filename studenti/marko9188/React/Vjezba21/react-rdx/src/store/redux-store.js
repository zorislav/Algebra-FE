import { createStore } from 'redux';

export const ADD_COUNT = 'ADD_COUNT';
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const RESET = 'RESET';
export const ADD_NESTO = 'ADD_NESTO';
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { counter: state.counter + action.payload};
    case SUBTRACT_COUNT:
      return { counter: state.counter - action.payload};
      case ADD_NESTO:
        return  {counter: state.counter + action.payload}
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
