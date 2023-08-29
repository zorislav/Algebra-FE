import { fetchData } from './data.js';
import { createElement } from './render.js';

const loadingSpin = document.getElementById("loadingSpinner");
const noSongsMsg = document.getElementById("noSongs");
const inputElement = document.getElementById("searchTerm");
const ulElement = document.getElementById("songsList");

export default () => {

    const updateMusicList = async () => {

        while(ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        }

        const inputElementValue = inputElement.value;

        if(inputElementValue) {

            noSongsMsg.style.display = "none";
            loadingSpin.style.display = "block";

            var retData = [];
            retData = await fetchData(inputElementValue);

            if(retData.length !== 0) {
                for(let i in retData) {
                    if(retData[i].artist && retData[i].song){
                        const listItemElement = createElement(retData[i]);
                        ulElement.appendChild(listItemElement);
                    }

                }
            } else {
                noSongsMsg.style.display = "block";
            }

            loadingSpin.style.display = "none";
        } else {
            noSongsMsg.style.display = "block";
        }

        //Obrisati postojeću listu

        // Dohvati sadržaj input elementa

        // Ako postoji sadržaj pretraži pjesme inače ispiši poruku nema pjesama
    }
    
    inputElement.addEventListener("input", updateMusicList);
}

