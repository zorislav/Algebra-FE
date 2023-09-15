import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const GET_DATA = 'GET_DATA';

const initialState = {
  nasaData: {
    title: '',
    url: '',
    explanation: ''
  }
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
  return async (dispatch) => {

    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn');
    const responseData = await response.json();
    const fetchedNasaData = {
      title: responseData.title,
      url: responseData.url,
      explanation: responseData.explanation
    };

    dispatch({type: GET_DATA, payload: fetchedNasaData});
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;