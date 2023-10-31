import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GithubApi } from '../services';

export const GET_REPOS = 'GET_REPOS';
export const RESET = 'RESET';

const initialState = {
  user: null,
  repos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { user: action.payload.user, repos: action.payload.repos };
    case RESET:
      return { user: null, repos: [] };
    default:
      return state;
  }
};

export function getRepos(userName) {
  return async (dispatch) => {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ])
    .then(([user, repos]) => dispatch({type: GET_REPOS, payload: {user, repos}}))
    .catch(error => alert(error));
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;