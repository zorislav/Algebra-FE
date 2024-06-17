import { getJSON } from "../helpers/helpers.js";

export const state = {
  searchQuery: "",
  songs: [],
};

export const loadSongs = async function () {
  if (state.searchQuery === "") {
    state.songs = [];
    return;
  }

  try {
    const data = await getJSON(
      `https://itunes.apple.com/search?term=${state.searchQuery}&media=music`
    );

    state.songs = data.results;
  } catch (err) {
    console.error(err.message);
    state.songs = [];
  }
};

export const changeSearchQuery = function (query) {
  state.searchQuery = query;
};

export const setSearchQuery = (value) => {};
