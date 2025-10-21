// Action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const TOGGLE_THEME = "TOGGLE_THEME";

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const toggleTheme = () => ({ type: TOGGLE_THEME });
