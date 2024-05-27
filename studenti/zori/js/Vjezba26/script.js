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
      listItem.appendChild(div);


      return listItem;

    }

    function addCheckBox(item) {
      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      item.insertBefore(checkBox, item.firstChild);

    }

    this.addListeners = function() {
      addButton.addEventListener("click", addListItem);

    }


  }

  Todo.prototype.init = function() {
    this.addListeners();
  }

  var todo = new Todo();

  window.addEventListener("load", todo.init());

})();

