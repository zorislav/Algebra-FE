import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const GET_DATA = "GET_DATA";
const API_KEY = "O7pnDBjjvI3cv0H4QNShXmbqNqOS8PPCJnhuuokK";

const initialState = {
  nasaData: {
    title: "",
    url: "",
    explanation: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { nasaData: action.payload };
    default:
      return state;
  }
};

export function getNasaData() {
  return async function (dispatch) {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    const responseData = await response.json();

    const fetchNasaData = {
      title: responseData.title,
      url: responseData.url,
      explanation: responseData.explanation,
    };

    dispatch({ type: GET_DATA, payload: fetchNasaData });
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
