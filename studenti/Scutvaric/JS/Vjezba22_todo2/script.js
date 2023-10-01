(
    /**
     * Todo-namespace
     * @namespace Todo_namespace
     * @author Stjepan
     */
    function(){

        /**
        *Todo - predstavlja objekt zadatka
        *
        * @name Todo
        * @class
        * @constructor
        * @memberof Todo_namespace
        */
        function Todo () {

            "use strict";


            const input = document.querySelector("input");
            /**
             * @name input
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */

            const addButton = document.querySelector("#input-add");
             /**
             * @name addButton
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */
            const allButton = document.querySelector("#button-all");
              /**
             * @name allButton
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */
            const activeButton = document.querySelector("#button-active");
              /**
             * @name activeButton
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */
            const completedButton = document.querySelector("#button-completed");
              /**
             * @name completedButton
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */
            const clearAllCompletedButton = document.querySelector("#button-clear-completed");
              /**
             * @name clearAllButton
             * @memberof Todo_namespace.Todo
             * @type {HTMLElement}
             */
            const list = document.querySelector("ul");

            function showAll () {
                const listItems = list.getElementsByTagName('li');
                for(var i = 0; i < listItems.length; i++){
                    var check = listItems[i].getElementsByTagName('input');
                    listItems[i].style.display = '';
                }
                allButton.disabled = true;
                activeButton.disabled = false;
                completedButton.disabled = false;
            }

            function showActive () {
                const listItems = list.getElementsByTagName('li');
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

            function showCompleted () {
                const listItems = list.getElementsByTagName('li');
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

            function removeAllCompleted () {
                const listItems = list.getElementsByTagName('li');

                for(let i = listItems.length -1; i >= 0; i--){
                    const check = listItems[i].getElementsByTagName('input');
                    if(check[0].checked){
                        listItems[i].remove();
                    }
                }
            }

            function checkListItem(event) {
                const checkBox = event.target;
                if(checkBox.checked) {
                    checkBox.parentNode.style.textDecoration = 'line-through';
                } else {
                    checkBox.parentNode.style.textDecoration = '';
                }
            }

            function removeListItem(event) {
                const removeButton = event.target;
                removeButton.parentNode.parentNode.remove();
            }

            function addCheckBox(item) {
                const checkbox = document.createElement("input");
                checkbox.setAttribute("type","checkbox");
                checkbox.addEventListener('click', checkListItem);
                item.insertBefore(checkbox, item.firstChild)
            }

            function addRemovebutton(item) {
                const removeButton = document.createElement("div");
                removeButton.innerText = "X";
                removeButton.className = "removeButton";
                removeButton.addEventListener('click', removeListItem);
                item.appendChild(removeButton);
            }

            function createlistItem(text) {
                const li = document.createElement("li");
                const div = document.createElement("div");
                const intDiv = document.createElement("div");
                div.classList.add('li-container');
                intDiv.classList.add('li-container-int');
                intDiv.innerText = text;
                addCheckBox(intDiv);
                div.appendChild(intDiv);
                addRemovebutton(div);
                li.appendChild(div);
                return li;
            }

             function addListItem () {
                const text = input.value.trim();

                if(text.length !== 0) {
                    console.log(text);
                    const newItem = createlistItem(text);
                    list.appendChild(newItem);
                    input.value = "";
                } else {
                    alert('Please enter todo!');
                }


            }

            this.addListeners = function() {
                addButton.addEventListener('click', addListItem);
                allButton.addEventListener('click', showAll);
                activeButton.addEventListener('click', showActive);
                completedButton.addEventListener('click', showCompleted);
                clearAllCompletedButton.addEventListener('click', removeAllCompleted);
            }
        }
        
        Todo.prototype.init = function() {
            this.addListeners();

        }
        
        const todo = new Todo();
        window.addEventListener('load', todo.init());
    }
    
)();