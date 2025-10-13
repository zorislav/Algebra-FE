import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const GET_DATA = "GET_DATA";

const API_KEY = "F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn";

// state

const initialState = {
  nasaData: {
    title: "",
    url: "",
    explanation: "",
  },
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { nasaData: action.payload };
    default:
      return state;
  }
};

// Thunk action creator function

export function getNasaData() {
  // thunk function

  return async function (dispatch) {
    // REST API GET

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    const responseData = await response.json();

    const fetchedNasaData = {
      title: responseData.title,
      url: responseData.url,
      explanation: responseData.explanation,
    };

    dispatch({ type: GET_DATA, payload: fetchedNasaData });
  };
}

// store

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
