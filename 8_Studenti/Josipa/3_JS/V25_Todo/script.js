/**
 * Todo_namespace - anonimna pozivajuca funkcija
 * @namespace Todo_namespace
 * @author Josipa
 */

(function () {
  /**
   * Todo - predstavlja objekt zadatka
   * @name Todo
   * @class
   * @constructor
   * @memberof Todo_namespace
   */
  function Todo() {
    var addButton = document.querySelector("#input-add");
    var input = document.querySelector("#input-text");
    var list = document.querySelector("ul");
    var allButton = document.querySelector("#button-all");
    var activeButton = document.querySelector("#button-active");
    var completedButton = document.querySelector("#button-completed");
    var clearCompletedButton = document.querySelector(
      "#button-clear-completed"
    );

    /**
     * createListItem - kreira novi zadatak - list item element
     * @name createListItem
     * @function
     * @memberof Todo_namespace.Todo
     * @param {string} text Tekst zadatka
     * @returns {HTMLElement}
     */

    function addListItem() {
      var text = input.value;

      if (text.trim().length !== 0) {
        var newItem = createListItem(text);
        list.appendChild(newItem);
        input.value = "";
      } else {
        alert("Please enter todo!");
      }
    }

    function createListItem(text) {
      var listItem = document.createElement("li");
      var div = document.createElement("div");
      var intDiv = document.createElement("div");
      intDiv.classList.add("li-container-int");
      div.classList.add("li-container");
      intDiv.innerText = text;
      addCheckBox(intDiv);
      div.appendChild(intDiv);
      addRemoveButton(div);
      listItem.appendChild(div);

      return listItem;
    }

    function addCheckBox(item) {
      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.addEventListener("click", checkListItem);
      item.insertBefore(checkBox, item.firstChild);
    }

    function addRemoveButton(item) {
      var removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "removeButton";
      removeButton.addEventListener("click", removeListItem);
      item.appendChild(removeButton);
    }

    function checkListItem(event) {
      var checkBox = event.target;
      if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "";
      }
    }

    function removeListItem(event) {
      var removeButton = event.target;
      removeButton.parentNode.parentNode.remove();
    }

    function showAll() {
      var listItems = list.getElementsByTagName("li");

      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = "";
      }

      allButton.disabled = true;
      activeButton.disabled = false;
      completedButton.disabled = false;
    }

    function showActive() {
      var listItems = list.getElementsByTagName("li");

      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }

      allButton.disabled = false;
      activeButton.disabled = true;
      completedButton.disabled = false;
    }

    function showCompleted() {
      var listItems = list.getElementsByTagName("li");

      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (!check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }

      allButton.disabled = false;
      activeButton.disabled = false;
      completedButton.disabled = true;
    }

    function removeAllCompleted() {
      var listItems = list.getElementsByTagName("li");

      for (var i = listItems.length - 1; i >= 0; i--) {
        var check = listItems[i].getElementsByTagName("input");
        if (check[0].checked) {
          listItems[i].remove();
        }
      }
    }

    this.addListeners = function () {
      addButton.addEventListener("click", addListItem);
      allButton.addEventListener("click", showAll);
      activeButton.addEventListener("click", showActive);
      completedButton.addEventListener("click", showCompleted);
      clearCompletedButton.addEventListener("click", removeAllCompleted);
    };
  }

  var todo = new Todo();
  Todo.prototype.init = function () {
    this.addListeners();
  };

  window.addEventListener("load", todo.init());

  // document.addEventListener("DOMContentLoaded", ...);
})();
