
export function Todo() {

  "use strict";

  const input = document.querySelector("input");
  const addButton = document.querySelector("#input-add");
  const allButton = document.querySelector("#button-all");
  const activeButton = document.querySelector("#button-active");
  const completedButton = document.querySelector("#button-completed");
  const clearAllCompletedButton = document.querySelector("#button-clear-completed");
  const list = document.querySelector("ul");

  function showAll() {
    
    const listItems = list.getElementsByTagName("li");

    for( let i = 0; i < listItems.length; i++) {
      listItems[i].style.display = '';
    }

    allButton.disabled = true;
    activeButton.disabled = false;
    completedButton.disabled = false;

  }

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

  function removeAllCompleted() {

    const listItems = list.getElementsByTagName("li");

    for( let i = listItems.length - 1; i >=0; i--) {
      const check = listItems[i].getElementsByTagName("input");
      if(check[0].checked) {
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
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener('click', checkListItem);
    item.insertBefore(checkbox, item.firstChild);
  }

  function addRemoveButton(item) {
    const removeButton = document.createElement("div");
    removeButton.innerText = "X";
    removeButton.className = "removeButton";
    removeButton.addEventListener('click', removeListItem);
    item.appendChild(removeButton);
  }

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

  this.addListeners = function() {
    document.addEventListener('DOMContentLoaded', () => {
      addButton.addEventListener('click', () => {this.addListItem()});
      allButton.addEventListener('click', showAll);
      activeButton.addEventListener('click', showActive);
      completedButton.addEventListener('click', showCompleted);
      clearAllCompletedButton.addEventListener('click', removeAllCompleted);
    });

  }

};
   
