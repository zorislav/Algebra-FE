(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function fetchData(term) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=20`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(r => ({
      artist: r.artistName,
      song: r.trackName
    }));
  } catch (e) {
    return [];
  }
}
module.exports = {
  fetchData
};

},{}],2:[function(require,module,exports){
const {
  fetchData
} = require("./data.js");
const {
  createElement
} = require("./render.js");
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
    songs.forEach(s => listEl.appendChild(createElement(s)));
  }
  inputEl.addEventListener("keyup", updateList);
}
module.exports = app;

},{"./data.js":1,"./render.js":3}],3:[function(require,module,exports){
function createElement(songData) {
  const li = document.createElement("li");
  li.textContent = `${songData.artist} - ${songData.song}`;
  return li;
}
module.exports = {
  createElement
};

},{}],4:[function(require,module,exports){
const app = require("./JS/main.js");
document.addEventListener("DOMContentLoaded", () => {
  app();
});

},{"./JS/main.js":2}]},{},[4]);
