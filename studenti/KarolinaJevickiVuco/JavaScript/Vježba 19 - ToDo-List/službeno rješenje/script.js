
// (function(){})();  - ovo je osnovna struktura unutra koje pišemo kod
//selektirati elemente s kojima želimo raditi
//definirati add listenere
//definirati funkcije na add listenere
//dodatno - create neke elemente i dodavati klase, te ih ubacivati


(
  /**
   * Todo_namespace - anonimna samopozivajuća funkcija
   * 
   * @namespace Todo_namespace
   * @author Zorislav 
   */

  function (){

  /** 
   * Todo - predstavlja objekt zadatka
   * 
   * @name Todo
   * @class 
   * @constructor
   * @memberof Todo_namespace
   */
  function Todo(){        //konstruktor funkcija za stvaranje objekta - to do lista --> unutar objekta imamo funkcije

      'use strict';

      // Definicija varijabli
      /**
       * @name input
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const input = document.querySelector("input");    //selektira input element
      /**
       * @name addButton
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const addButton = document.querySelector("#input-add");
      /**
       * @name allButton
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const allButton = document.querySelector("#button-all");
      /**
       * @name activeButton
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const activeButton = document.querySelector("#button-active");
      /**
       * @name completedButton
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const completedButton = document.querySelector("#button-completed");
      /**
       * @name clearAllCompletedButton
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const clearAllCompletedButton = document.querySelector("#button-clear-completed");
      /**
       * @name list
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */

      const list = document.querySelector("ul");


      /**
       * showAll - prikazuje sve zadatke
       * 
       * @name showAll
       * @memberof Todo_namespace.Todo
       * @function
       */
      function showAll() {
          const listItems = list.getElementsByTagName('li');
          for(let i = 0; i < listItems.length; i++){         //prolazi kroz sve li 
               listItems[i].style.display = '';             //postavlja display na prazan string
          }
          allButton.disabled = true;   //all button nije aktivan, tj ne može se kliknuti
          activeButton.disabled = false;
          completedButton.disabled = false;
      }
      
      /**
       * showActive - prikazuje sve nezavršene todo
       * 
       * @name showActive
       * @memberof Todo_namespace.Todo
       * @function
       */
      function showActive() {
          const listItems = list.getElementsByTagName('li');  //selektira sve li
          for(let i = 0; i < listItems.length; i++){          //prolazi kroz listu i svaki put se povećava za 1
              const check = listItems[i].getElementsByTagName('input');   //list item od trenutnog list itema (i), selektiramo input element unutar list itema
              if(check[0].checked){         //ako je check od 0, tj prvog elementa - u sljedećem 2. ...
                  listItems[i].style.display = 'none';    //na taj konkretni list item (i), ide pravilo none display - neće se prikazati
              }else{
                  listItems[i].style.display = '';    
              }
          }
          allButton.disabled = false;           //aktivan je taj button nakon što kliknemo active - dakle, možemo ga izabrati
          activeButton.disabled = true;         //ova selekcija nije aktivna, tako da ne možemo opet kliknuti na taj button
          completedButton.disabled = false;     //aktivan button
      }
      
      /**
       * showCompleted - prikazuje sve završene zadatke
       * 
       * @name showCompleted
       * @memberof Todo_namespace.Todo
       * @function
       */
      function showCompleted() {
          const listItems = list.getElementsByTagName('li');
          for(let i = 0; i < listItems.length; i++){
              const check = listItems[i].getElementsByTagName('input');
              if(!check[0].checked){
                  listItems[i].style.display = 'none';
              }else{
                  listItems[i].style.display = '';
      
              }
          }
          allButton.disabled = false;
          activeButton.disabled = false;
          completedButton.disabled = true;  //completed button više nije aktivan, tj. ne može se izabrati
      }

      /**
       * removeAllCompleted - uklanja sve završene zadatke
       * 
       * @name removeAllCompleted
       * @memberof Todo_namespace.Todo
       * @function
       */
      function removeAllCompleted() {
          const listItems = list.getElementsByTagName('li');        //selektira sve li
          for(let i = listItems.length - 1; i >= 0; i--){           
              const check = listItems[i].getElementsByTagName('input');
              if(check[0].checked){             
                  listItems[i].remove();  //ako je input element checked, mičemo ga
              }
          }
      }
      
      //i se mora prilagoditi - idemo s kraja liste i pri svakom prolazu umanjujemo za jedan - prolazimo od zadnjeg prema prvom elementu 
      //i umanjuje se uvijek za jedan tako da ne promaši neki element uslijed brisanja
      //kad bi se išlo od početka i dodavalo po jedan, onda bi se jedan obrisao, a sljedeći obrisani iza njega potencijalno preskočio jer bi postao npr 2 umjesto treći, a taj smo već preskočili



      /**
       * removeListItem - uklanja list item element
       * 
       * @name removeListItem
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function removeListItem(event) {
          const removeButton = event.target;
          removeButton.parentNode.parentNode.remove(); //parent Node je li-container div, a drugi parent node je list item koji želimo maknuti
      }
      
      /**
       * checkListItem - označava list item element kao završen
       * 
       * @name checkListItem
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function checkListItem(event){
          const checkBox = event.target;    //event.target spremamo u const
          if(checkBox.checked) {
              checkBox.parentNode.style.textDecoration = 'line-through';   //ako je checked, parent node, tj. interni div se prekriži
          }else{
              checkBox.parentNode.style.textDecoration = ''; //ako nije checked, nema text decoration, tj. ostaje isti;
          }   
      }
      
      /**
       * addRemoveButton - dodaje remove button list item elementu (x na kraju list itema)
       * 
       * @name addRemoveButton
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function addRemoveButton(item) {      
          const removeButton = document.createElement('div');   //kreira div
          removeButton.innerText = 'X';                         //dodaje x u taj div
          removeButton.className = "removeButton";              //dodaje klasu na div
          removeButton.addEventListener("click", removeListItem); //klik - izvršava se funk. removeListitem
          item.appendChild(removeButton);                       //dodaje na naš item remove button, tj X
      }
      
      /**
       * addCheckbox - dodaje checkbox list item elementu
       * 
       * @name addCheckBox
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function addCheckbox(item) {                        //kao parametar dodajemo interni div element                   
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.addEventListener('click', checkListItem);  //kad kliknemo na X, izvršava se funckija checkListItem
          item.insertBefore(checkbox, item.firstChild);   //ubacujemo checkbox ispred itema first child, tj. int div
          
      }
      
      /**
       * createListItem - kreira list item element
       * 
       * @name createListItem
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       * @return {HTMLElement}
       */
      function createListItem(text) {
          const li = document.createElement('li');  //dodaje novi li element u ul
          const div = document.createElement('div');      //dodaje div element koji će obuhvatiti sve nove list iteme kako bismo ih mogli stilizirati
          div.classList.add('li-container');              //dodaje klasu na novi div element
          const intDiv = document.createElement('div');   //dodaje interni div - u njemu je text pojedinog itema i checkbox
          intDiv.classList.add('li-container-int');       //dodaje klasu na taj interni div
          intDiv.innerText = text;                        //dodaje parametar text koji se unosi
          addCheckbox(intDiv);
          div.appendChild(intDiv);                        //interni div dodaje unutar div
          addRemoveButton(div);                           //parametar je gore kreiran div
          li.appendChild(div);                            //dodaje list item na div
          return li;                          
      }
      
      /**
       * addListItem - dodaje list item element
       * 
       * @name addListItem
       * @memberof Todo_namespace.Todo
       * @function
       */
      function addListItem() {
          const text = input.value.trim();
          if(text.length !== 0){         //ako je text.length različito od 0, nešto je upisano
              const newItem = createListItem(text);   //kreira novi list item kroz funk. createListItem
              list.appendChild(newItem);
              input.value = '';       //poništava upis u polju za unos nakon što smo nešto dodali -- polje ostaje prazno i spremno za novi upis
          }else{
              alert('Please enter todo');     //ako if gore nije true, dakle 0 je, nema ništa upisano, iskače prozor s ovom porukom
          }

      }


      /**
       * addListeners - anonimna funkcija koja dodaje event listenere
       * 
       * @name addListeners
       * @memberof Todo_namespace.Todo
       * @function
       */
      this.addListeners = function() {
          addButton.addEventListener('click', addListItem);    //na klik button, izvršava fuknciju addListItem
          allButton.addEventListener('click', showAll);
          activeButton.addEventListener('click', showActive);
          completedButton.addEventListener('click', showCompleted);
          clearAllCompletedButton.addEventListener('click', removeAllCompleted);
      };
  }

  /**
   * init  -inicijaliziraj sve event listenere nakon što se stranica učita
   * 
   * @name init
   * @memberof Todo_namespace
   * @function
   */
  Todo.prototype.init = function() {    //funkcija definirana na prototipu objekta 
  this.addListeners();                  //dodaje event listenere 
};

  const todo = new Todo();   //kreira to do
  window.addEventListener('load', todo.init());  //kad se event load dogodi, odradi se init funk. na todo objektu - gore su definirani event listener

})();