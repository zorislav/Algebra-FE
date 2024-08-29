//redux-store.js
//src/store/redux-store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  repos: [],
  darkMode: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRepos: (state, action) => {
      state.repos = action.payload;
    },
    reset: (state) => {
      state.user = null;
      state.repos = [];
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setUser, setRepos, reset, toggleDarkMode } = userSlice.actions;

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;

export const selectUser = (state) => state.user;
export const selectRepos = (state) => state.repos;
export const selectDarkMode = (state) => state.darkMode;
