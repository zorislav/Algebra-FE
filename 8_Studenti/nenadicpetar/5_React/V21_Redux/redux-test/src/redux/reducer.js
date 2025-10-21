import { INCREMENT, DECREMENT, RESET, TOGGLE_THEME } from "./actions";

const initialState = {
  counter: 0,
  darkMode: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}
