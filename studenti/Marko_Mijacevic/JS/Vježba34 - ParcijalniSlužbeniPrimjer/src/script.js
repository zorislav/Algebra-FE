import { fetchData } from "./data";
import { createElement } from "./render";

const inputElement = document.getElementById("search-term");
const ulElement = document.getElementById("songs-list");
const noSongsMsg = document.getElementById("no-songs");
const loadSpin = document.getElementById("loading-spinner");

var timeout = null;

export default () => {

    const updateMusicList = (event) => {

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

                    retData.forEach(item => {
                        if (item.song && item.artist) {
                            const listItemElement = createElement(item);
                            ulElement.appendChild(listItemElement);
                        }
                    });

                } else {
                    noSongsMsg.style.display = "block";
                }

            } else {
                noSongsMsg.style.display = "block";
            }

        }, 800);
    }

    inputElement.addEventListener("keyup", updateMusicList);
}
