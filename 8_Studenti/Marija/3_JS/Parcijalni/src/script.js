import { fetchData } from "./data.js";
import { createElement } from "./render.js";

var timeout = null;

export default () => {
  const inputElement = document.getElementById("searchTerm");
  const ulElement = document.getElementById("songsList");
  const noSongsMsg = document.getElementById("noSongs");
  const loadSpin = document.getElementById("loadingSpinner");

  const updateMusicList = () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }

      const inputElementValue = inputElement.value;

      if (inputElementValue) {
        noSongsMsg.style.display = "none";
        loadSpin.style.display = "block";

        var retData = [];

        retData = await fetchData(inputElementValue);

        loadSpin.style.display = "none";

        if (retData.length !== 0) {
          for (var i in retData) {
            if (retData[i].artist && retData[i].song) {
              const listItemElement = createElement(retData[i]);
              ulElement.appendChild(listItemElement);
            }
          }
        } else {
          noSongsMsg.style.display = "block";
        }
      } else {
        noSongsMsg.style.display = "block";
      }
    }, 800);
  };

  inputElement.addEventListener("keyup", updateMusicList);
};
