// &#x2715; -> x button

(function() {
  function toDo() {
    var input = document.querySelector("#input-text")
    var addButton = document.querySelector("#input-add")
    var allButton = document.querySelector("#button-all")
    var activeButton = document.querySelector("#button-active")
    var completedButton = document.querySelector("#button-completed")
    var clearAll = document.querySelector("#button-clear-completed")
    var list = document.querySelector("ul")

    function addListItem() {
      let text = input.value 
      if(text.trim().length !== 0) {
        var newItem = createListItem(text)
        list.appendChild(newItem)
        input.value = ""
      } else {
        alert("Please enter To-do")
      }
    }

    function createListItem(text) {
      var listItem = document.createElement("li")
      var div = document.createElement("div")
      var intDiv = document.createElement("div")
      div.classList.add("li-container")
      intDiv.classList.add("li-container-int")
      intDiv.innerText = text
      addCheckBox(intDiv) 
      div.appendChild(intDiv)

      addRemoveButton(div)
      listItem.appendChild(div)


      return listItem
    }

    function addCheckBox(item) {
      var checkBox = document.createElement("input")
      checkBox.setAttribute("type", "checkbox")
      checkBox.addEventListener("click", checkListItem)
      item.insertBefore(checkBox, item.firstChild)
    }

    function addRemoveButton(item) {
      var removeButton = document.createElement("div")
      removeButton.innerHTML = "<p>&#x2715;</p>"
      removeButton.className = "removeButton"
      removeButton.addEventListener("click", removeListItem)
      item.appendChild(removeButton)
    }

    function checkListItem(event) {
      var checkBox = event.target
      if(checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through"
      } else {
        checkBox.parentNode.style.textDecoration = ""
      }
    }

    function removeListItem(event) {
      var removeButton = event.target
      removeButton.parentNode.parentNode.remove()
    }
    function showActive() {
      var listItems = list.getElementsByTagName("li")
      
      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input")
        if (check[0].checked) {
          listItems[i].style.display = "none"
        } else {
          listItems[i].style.display = ""
        }
      }
      activeButton.disabled = false
      allButton.disabled = true
      completedButton.disabled = false
    }

    function showCompleted() {
      var listItems = list.getElementsByTagName("li")
      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input")
        if(!check[0].checked){
          listItems[i].style.display = "none"
        } else {
          listItems[i].style.display = ""
        }
      }
      activeButton.disabled = false
      allButton.disabled = false
      completedButton.disabled = true
    }
    
    function showAll() {
      var listItems = list.getElementsByTagName("li")

      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = ""
      }
      activeButton.disabled = true
      allButton.disabled = false
      completedButton.disabled = false
    }

    function removeAllCompleted() {
      var listItems = list.getElementsByTagName("li")
      for (var i = listItems.length-1; i >= 0 ; i--) {
        if(check[0].checked) {
          listItems[i].remove()
        }
      }
    }

    this.addListeners = function() {
      addButton.addEventListener("click", addListItem)
      activeButton.addEventListener("click", showActive)
      completedButton.addEventListener("click", showCompleted)
      allButton.addEventListener("click", showAll)
      clearAll.addEventListener("click", removeAllCompleted)
    }
  }

  toDo.prototype.init = function() {
    this.addListeners()
  }

  var todo = new toDo()

  window.addEventListener("load", todo.init())
})();