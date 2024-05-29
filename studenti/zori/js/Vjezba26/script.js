(function(){

  function Todo() {

    var input = document.querySelector("#input-text");
    var addButton = document.querySelector("#input-add");
    var allButton = document.querySelector("#button-all");
    var activeButton = document.querySelector("#button-active");
    var completedButton = document.querySelector("#button-completed");
    var clearAllCompletedButton = document.querySelector("#button-clear-completed");
    var list = document.querySelector("ul");

    function addListItem() {

      var text = input.value;

      if(text.trim().length !== 0) {

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
      div.classList.add("li-container");
      intDiv.classList.add("li-container-int");
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
      removeButton.innerText = "X"
      removeButton.className ="removeButton";
      removeButton.addEventListener("click", removeListItem);
      item.appendChild(removeButton);
    }

    function checkListItem(event) {

      var checkBox = event.target;
      if(checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "";
      }

    }

    function removeListItem(event) {

      var removeButton = event.target;
      removeButton.parentNode.parentNode.remove();

    }

    function showActive() {

      var listItems = list.getElementsByTagName("li");

      for (var i=0; i < listItems.length; i++) {
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

      for (var i=0; i< listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (!check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }

        allButton.disabled = false;
        activeButton.disabled = false;
        completedButton.disabled = true;

      }

    }

    function showAll() {

      var listItems = list.getElementsByTagName("li");

      for (var i=0; i < listItems.length; i++) {
        listItems[i].style.display = "";
      }

      allButton.disabled = true;
      activeButton.disabled = false;
      completedButton.disabled = false;

    }

    function removeAllCompleted() {

      var listItems = list.getElementsByTagName("li");

      for (var i=listItems.length-1; i >= 0; i--) {
        var check = listItems[i].getElementsByTagName("input");
        if(check[0].checked) {
          listItems[i].remove();
        }
      }

    }

    this.addListeners = function() {
      addButton.addEventListener("click", addListItem);
      activeButton.addEventListener("click", showActive);
      completedButton.addEventListener("click", showCompleted);
      allButton.addEventListener("click", showAll);
      clearAllCompletedButton.addEventListener("click", removeAllCompleted);
    }


  }

  Todo.prototype.init = function() {
    this.addListeners();
  }

  var todo = new Todo();

  window.addEventListener("load", todo.init());

})();


// 1
// 4


