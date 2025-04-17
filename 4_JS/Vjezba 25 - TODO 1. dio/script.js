
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
    function Todo(){

        'use strict';

        // Definicija varijabli
        /**
         * @name input
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var input = document.querySelector("input");
        /**
         * @name addButton
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var addButton = document.querySelector("#input-add");
        /**
         * @name allButton
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var allButton = document.querySelector("#button-all");
        /**
         * @name activeButton
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var activeButton = document.querySelector("#button-active");
        /**
         * @name completedButton
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var completedButton = document.querySelector("#button-completed");
        /**
         * @name clearAllCompletedButton
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var clearAllCompletedButton = document.querySelector("#button-clear-completed");
        /**
         * @name list
         * @memberof Todo_namespace.Todo 
         * @type {HTMLElement} */
        var list = document.querySelector("ul");


        /**
         * showAll - prikazuje sve zadatke
         * 
         * @name showAll
         * @memberof Todo_namespace.Todo
         * @function
         */
        function showAll() {
            var listItems = list.getElementsByTagName('li');
            for(var i = 0; i < listItems.length; i++){
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
            var listItems = list.getElementsByTagName('li');
            for(var i = 0; i < listItems.length; i++){
                var check = listItems[i].getElementsByTagName('input');
                if(check[0].checked){
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
            var listItems = list.getElementsByTagName('li');
            for(var i = 0; i < listItems.length; i++){
                var check = listItems[i].getElementsByTagName('input');
                if(!check[0].checked){
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
            var listItems = list.getElementsByTagName('li');
            for(var i = listItems.length - 1; i >= 0; i--){
                var check = listItems[i].getElementsByTagName('input');
                if(check[0].checked){
                    listItems[i].remove();
                }
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
            var removeButton = event.target;
            removeButton.parentNode.parentNode.remove();
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
            var checkBox = event.target;
            if(checkBox.checked) {
                checkBox.parentNode.style.textDecoration = 'line-through';
            }else{
                checkBox.parentNode.style.textDecoration = '';
            }   
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
            var removeButton = document.createElement('div');
            removeButton.innerText = 'X';
            removeButton.className = "removeButton";
            removeButton.addEventListener("click", removeListItem);
            item.appendChild(removeButton);
        }
        
        /**
         * addRemoveButton - dodaje checkbox list item elementu
         * 
         * @name addCheckBox
         * @memberof Todo_namespace.Todo
         * @function
         * @param {event} event
         */
        function addCheckbox(item) {
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.addEventListener('click', checkListItem);
            item.insertBefore(checkbox, item.firstChild);
            
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
            var listItem = document.createElement('li');
            var div = document.createElement('div');
            div.classList.add('li-container');
            var intDiv = document.createElement('div');
            intDiv.classList.add('li-container-int');
            intDiv.innerText = text;
            addCheckbox(intDiv);
            div.appendChild(intDiv);
            addRemoveButton(div);
            listItem.appendChild(div);
            return listItem;
        }
        
        /**
         * addListItem - dodaje list item element
         * 
         * @name addListItem
         * @memberof Todo_namespace.Todo
         * @function
         */
        function addListItem() {
            var text = input.value;
            if(text.trim().length !== 0){
                var newItem = createListItem(text);
                list.appendChild(newItem);
                input.value = '';
            }else{
                alert('Please enter todo');
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
			addButton.addEventListener('click', addListItem);
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
    Todo.prototype.init = function() {
		this.addListeners();
	};

    var todo = new Todo();
    window.addEventListener('load', todo.init());

})();