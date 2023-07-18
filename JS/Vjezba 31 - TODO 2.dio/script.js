const Td = (
  /**
   * Todo_namespace - anonimna samopozivajuća funkcija
   * 
   * @namespace Todo_namespace
   * @author Zorislav 
   */
  function(){

    /** 
     * Todo - predstavlja objekt zadatka
     * 
     * @name Todo
     * @class 
     * @constructor
     * @memberof Todo_namespace
     */
    function Todo() {

      "use strict";

      // Definicija varijabli
      /**
       * @name input
       * @memberof Todo_namespace.Todo 
       * @type {HTMLElement} */
      const input = document.querySelector("input");

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
        
        const listItems = list.getElementsByTagName("li");

        for( let i = 0; i < listItems.length; i++) {
          listItems[i].style.display = '';
        }

        allButton.disabled = true;
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

        const listItems = list.getElementsByTagName("li");

        for( let i = 0; i < listItems.length; i++) {
          const check = listItems[i].getElementsByTagName("input");
          if(check[0].checked) {
            listItems[i].style.display = 'none';
          }else{
            listItems[i].style.display = '';
          }
        }

        allButton.disabled = false;
        activeButton.disabled = true;
        completedButton.disabled = false;
      }

      /**
       * showCompleted - prikazuje sve završene zadatke
       * 
       * @name showCompleted
       * @memberof Todo_namespace.Todo
       * @function
       */
      function showCompleted() {

        const listItems = list.getElementsByTagName("li");

        for( let i = 0; i < listItems.length; i++) {
          const check = listItems[i].getElementsByTagName("input");
          if(!check[0].checked) {
            listItems[i].style.display = 'none';
          }else{
            listItems[i].style.display = '';
          }
        }

        allButton.disabled = false;
        activeButton.disabled = false;
        completedButton.disabled = true;
      }

      /**
       * removeAllCompleted - uklanja sve završene zadatke
       * 
       * @name removeAllCompleted
       * @memberof Todo_namespace.Todo
       * @function
       */
      function removeAllCompleted() {

        const listItems = list.getElementsByTagName("li");

        for( let i = listItems.length - 1; i >=0; i--) {
          const check = listItems[i].getElementsByTagName("input");
          if(check[0].checked) {
            listItems[i].remove();
          }
        }
      }

      /**
       * checkListItem - označava list item element kao završen
       * 
       * @name checkListItem
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function checkListItem(event) {
        const checkBox = event.target;
        if(checkBox.checked) {
          checkBox.parentNode.style.textDecoration = 'line-through';
        } else { 
          checkBox.parentNode.style.textDecoration = '';
        }
      }

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
        removeButton.parentNode.parentNode.remove();
      }

      /**
       * addCheckBox - dodaje checkbox list item elementu
       * 
       * @name addCheckBox
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function addCheckBox(item) {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener('click', checkListItem);
        item.insertBefore(checkbox, item.firstChild);
      }

      /**
       * addRemoveButton - dodaje remove button list item elementu
       * 
       * @name addRemoveButton
       * @memberof Todo_namespace.Todo
       * @function
       * @param {event} event
       */
      function addRemoveButton(item) {
        const removeButton = document.createElement("div");
        removeButton.innerText = "X";
        removeButton.className = "removeButton";
        removeButton.addEventListener('click', removeListItem);
        item.appendChild(removeButton);
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
      this.createlistItem = function(text) {
        const li = document.createElement("li");
        const div = document.createElement("div");
        const intDiv = document.createElement("div");
        div.classList.add('li-container');
        intDiv.classList.add('li-container-int');
        intDiv.innerText = text;
        addCheckBox(intDiv);
        div.appendChild(intDiv);
        addRemoveButton(div);
        li.appendChild(div);  
        return li;
      }

      /**
       * addListItem - dodaje list item element
       * 
       * @name addListItem
       * @memberof Todo_namespace.Todo
       * @function
       */
      this.addListItem = function() {
        const text = input.value.trim();

        if(text.length !== 0) { 
          const newItem = this.createlistItem(text);
          list.appendChild(newItem);
          input.value = "";
        } else {
          alert('Please enter todo!');
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
        document.addEventListener('DOMContentLoaded', ()=>{
          addButton.addEventListener('click', () => {this.addListItem()});
          allButton.addEventListener('click', showAll);
          activeButton.addEventListener('click', showActive);
          completedButton.addEventListener('click', showCompleted);
          clearAllCompletedButton.addEventListener('click', removeAllCompleted);
        });
      }

    }
   
    /**
     * init  -inicijaliziraj sve event listenere nakon što se stranica učita
     * 
     * @name init
     * @memberof Todo_namespace
     * @function
     */
    Todo.prototype.init = function() {
      this.addListeners();
    }

    const todo = new Todo();

    window.addEventListener('DOMContentLoaded', todo.init());

    return Todo;
  }
)();

export default Td;