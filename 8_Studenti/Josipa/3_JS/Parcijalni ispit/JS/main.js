const { fetchData } = require("./data.js");
const { createElement } = require("./render.js");

function app() {
  const inputEl = document.getElementById("search");
  const listEl = document.getElementById("ListaPjesama");
  const spinner = document.getElementById("Pretrazivanje");
  const noSongs = document.getElementById("noSongs");

  async function updateList() {
    listEl.innerHTML = "";
    const term = inputEl.value.trim();

    if (!term) {
      noSongs.style.display = "block";
      return;
    }

    noSongs.style.display = "none";
    spinner.style.display = "block";

    const songs = await fetchData(term);

    spinner.style.display = "none";

    if (songs.length === 0) {
      noSongs.style.display = "block";
      return;
    }

    songs.forEach((s) => listEl.appendChild(createElement(s)));
  }

  inputEl.addEventListener("keyup", updateList);
}

module.exports = app;
