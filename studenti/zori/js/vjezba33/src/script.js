import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("search-term");
const ulElement = document.getElementById("songs-list");
const noSongsMsg = document.getElementById("nosongs");
const loadSpin = document.getElementById("loading-spinner");

var timeout = null;

export default () => {


  const updateMusicList = (event) => {

    clearTimeout(timeout);

    timeout = setTimeout( async () => {

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
          
            if (retData[i].song && retData[i].artist) {
              
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

  }


  inputElement.addEventListener("keyup", updateMusicList);

}


