
    function (){
            

     export function Todo(){

        'use strict';

        var input = document.querySelector("input");
        var addButton = document.querySelector("#input-add");
        var allButton = document.querySelector("#button-all");
        var activeButton = document.querySelector("#button-active");
        var completedButton = document.querySelector("#button-completed");
        var clearAllCompletedButton = document.querySelector("#button-clear-completed");
        var list = document.querySelector("ul");
        function showAll() {
            var listItems = list.getElementsByTagName('li');
            for(var i = 0; i < listItems.length; i++){
                 listItems[i].style.display = '';
            }
            allButton.disabled = true;
            activeButton.disabled = false;
            completedButton.disabled = false;
        }
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
        function removeAllCompleted() {
            var listItems = list.getElementsByTagName('li');
            for(var i = listItems.length - 1; i >= 0; i--){
                var check = listItems[i].getElementsByTagName('input');
                if(check[0].checked){
                    listItems[i].remove();
                }
            }
        }
        function removeListItem(event) {
            var removeButton = event.target;
            removeButton.parentNode.parentNode.remove();
        }
       
        function checkListItem(event){
            var checkBox = event.target;
            if(checkBox.checked) {
                checkBox.parentNode.style.textDecoration = 'line-through';
            }else{
                checkBox.parentNode.style.textDecoration = '';
            }   
        }
      
        function addRemoveButton(item) {
            var removeButton = document.createElement('div');
            removeButton.innerText = 'X';
            removeButton.className = "removeButton";
            removeButton.addEventListener("click", removeListItem);
            item.appendChild(removeButton);
        }
       
        function addCheckbox(item) {
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.addEventListener('click', checkListItem);
            item.insertBefore(checkbox, item.firstChild);
            
        }
      
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
   return Todo
})();

export default Td;