import { fetchData } from './data.js';
import { createElement } from "./render.js";

const inputElement = document.getElementById("search-term");
const ulElement = document.getElementById("songs-list");
const nosongsMsg = document.getElementById("nosongs");
const loadSpin = document.getElementById("loading-spinner");

let timeout;

export default () => {
  const updateMusicList = async (event) => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }

      const inputElementValue = inputElement.value;

      if (inputElementValue) {
        nosongsMsg.style.display = "none";
        loadSpin.style.display = "block";

        try {
          const retData = await fetchData(inputElementValue);
          loadSpin.style.display = "none";

          if (retData.length !== 0) {
            for (const item of retData) {
              if (item.song && item.artist) {
                const listItemElement = createElement(item);
                ulElement.appendChild(listItemElement);
              }
            }
          } else {
            nosongsMsg.style.display = "block";
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          loadSpin.style.display = "none";
          nosongsMsg.style.display = "block";
        }
      } else {
        nosongsMsg.style.display = "block";
      }
    }, 800);
  };

  inputElement.addEventListener("keyup", updateMusicList);
};
