import * as model from "./model/state.js";
import searchView from "./view/searchView.js";
import songListView from "./view/songListView.js";

const controlSongs = async function () {
  // 1. Prikaži loading spinner
  songListView.renderSpinner();

  // 2. Preuzmi podatke sa API-ja
  await model.loadSongs();

  // 3. Renderiraj pjesme dobavljene sa API-ja
  songListView.render(model.state.songs);
};

const controlSearchQuery = async () => {
  // 1. Dobavi search query iz inputa
  const query = searchView.getQuery();

  // 2. Obnovi searchQuery varijablu unutar state-a
  model.changeSearchQuery(query);

  // 3. Ponovno pokreni fetch i state update
  await model.loadSongs();

  // 4. Re-renderiraj songListView
  songListView.render(model.state.songs);
};

const init = function () {
  songListView.addHandlerRender(controlSongs);
  searchView.addHandlerSearch(controlSearchQuery);
};

init();
