(function () {
  function Todo() {
    // Dohvatiti elemente
    var input = document.querySelector("input");
    var addButton = document.querySelector("#input-add");
    var allButton = document.querySelector("#button-all");
    var activeButton = document.querySelector("#button-active");
    var completedButton = document.querySelector("#button-completed");
    var clearAllCompletedButton = document.querySelector(
      "#button-clear-completed"
    );
    var list = document.querySelector("ul");
    var loadButton = document.getElementById("load");
    var saveButton = document.getElementById("save");

    // ...
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

    async function loadFromFirebase() {
      const data = await getData();
      var listItems = list.getElementsByTagName("li");
      if (listItems.length !== 0) {
        const answer = confirm("Replace current list items?");
        if (answer) {
          // Obrisi postojece stavke
          for (var i = listItems.length - 1; i >= 0; i--) {
            listItems[i].remove();
          }
        }
      }
      // Dodaj nove stavke
      for (var item in data) {
        var newItem = createListItem(data[item].todoItem);
        list.appendChild(newItem);
      }
    }

    function saveToFirebase() {
      var listItems = list.getElementsByTagName("li");
      if (listItems.length > 0) {
        for (var i = 0; i < listItems.length; i++) {
          var divEl = listItems[i].querySelector("div.li-container-int");
          postData(divEl.innerText);
        }
        alert("Data saved!");
      } else {
        alert("Nothing to save!");
      }
    }

    async function getData() {
      try {
        const response = await fetch(
          "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/todo.json",
          {
            method: "GET",
          }
        );
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        alert(error);
      }
    }

    async function postData(text) {
      const postObj = {
        todoItem: text,
      };

      try {
        // Prvo obrisi sve postojece stavke u todo.json
        await fetch(
          "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/todo.json",
          {
            method: "DELETE",
          }
        );

        // Upisi nove stavke u todo.json
        const response = await fetch(
          "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/todo.json",
          {
            method: "POST",
            body: JSON.stringify(postObj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        alert(error);
      }
    }

    this.addListeners = function () {
      // Postaviti event listenere
      addButton.addEventListener("click", addListItem);
      allButton.addEventListener("click", showAll);
      activeButton.addEventListener("click", showActive);
      completedButton.addEventListener("click", showCompleted);
      clearAllCompletedButton.addEventListener("click", removeAllCompleted);
      loadButton.addEventListener("click", loadFromFirebase);
      saveButton.addEventListener("click", saveToFirebase);
    };
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  var todo = new Todo();

  window.addEventListener("load", todo.init());
})();

// // Dohvatiti elemente
// var input = document.querySelector("input");
// var addButton = document.querySelector("#input-add");
// var allButton = document.querySelector("#button-all");
// var activeButton = document.querySelector("#button-active");
// var completedButton = document.querySelector("#button-completed");
// var clearAllCompletedButton = document.querySelector("#button-clear-completed");
// var list = document.querySelector("ul");

// // ...
// function addListItem() {

//   var text = input.value;

//   if (text.trim().length !== 0) {

//     var newItem = createListItem(text);
//     list.appendChild(newItem);
//     input.value = "";

//   } else {

//     alert("Please enter todo!");

//   }

// }

// function createListItem(text) {

//   var listItem = document.createElement("li");
//   var div = document.createElement("div");
//   var intDiv = document.createElement("div");
//   div.classList.add("li-container");
//   intDiv.classList.add("li-container-int");
//   intDiv.innerText = text;
//   addCheckBox(intDiv);
//   div.appendChild(intDiv);
//   addRemoveButton(div);
//   listItem.appendChild(div);

//   return listItem;
// }

// function addCheckBox(item){

//   var checkBox = document.createElement("input");
//   checkBox.setAttribute("type", "checkbox");
//   checkBox.addEventListener("click", checkListItem);
//   item.insertBefore(checkBox, item.firstChild);

// }

// function addRemoveButton(item) {

//   var removeButton = document.createElement("div");
//   removeButton.innerText = "X";
//   removeButton.className = "removeButton";
//   removeButton.addEventListener("click", removeListItem);
//   item.appendChild(removeButton);

// }

// function checkListItem(event) {

//   var checkBox = event.target;
//   if (checkBox.checked ) {
//     checkBox.parentNode.style.textDecoration = "line-through";
//   } else {
//     checkBox.parentNode.style.textDecoration = "";
//   }

// }

// function removeListItem(event) {

//   var removeButton = event.target;
//   removeButton.parentNode.parentNode.remove();

// }

// function showAll() {

//   var listItems = list.getElementsByTagName("li");
//   for (var i=0; i < listItems.length; i++ ) {
//     listItems[i].style.display = "";
//   }

//   allButton.disabled = true;
//   activeButton.disabled = false;
//   completedButton.disabled = false;

// }

// function showActive() {

//   var listItems = list.getElementsByTagName("li");

//   for (var i=0; i < listItems.length; i++ ) {
//     var check =  listItems[i].getElementsByTagName("input");
//     if (check[0].checked) {
//       listItems[i].style.display = "none";
//     } else {
//       listItems[i].style.display = "";
//     }
//   }

//   allButton.disabled = false;
//   activeButton.disabled = true;
//   completedButton.disabled = false;

// }

// function showCompleted() {

//   var listItems = list.getElementsByTagName("li");

//   for (var i=0; i < listItems.length; i++ ) {
//     var check =  listItems[i].getElementsByTagName("input");
//     if (!check[0].checked) {
//       listItems[i].style.display = "none";
//     } else {
//       listItems[i].style.display = "";
//     }
//   }

//   allButton.disabled = false;
//   activeButton.disabled = false;
//   completedButton.disabled = true;

// }

// function removeAllCompleted() {

//   var listItems = list.getElementsByTagName("li");

//   for (var i=listItems.length-1; i >=0; i-- ) {
//     var check =  listItems[i].getElementsByTagName("input");
//     if (check[0].checked) {
//       listItems[i].remove();
//     }

//   }

// }

// // Postaviti event listenere
// addButton.addEventListener("click", addListItem);
// allButton.addEventListener("click", showAll);
// activeButton.addEventListener("click", showActive);
// completedButton.addEventListener("click", showCompleted);
// clearAllCompletedButton.addEventListener("click", removeAllCompleted)
