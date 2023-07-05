function AddNewElement() {
  var listItem = document.createElement("li");
  var inputValue = document.getElementById("taskText").value;
  var text = document.createTextNode(inputValue);

  listItem.appendChild(text);
      if (inputValue === '') {
          alert("Polje ne može biti prazno, morate upisati neki tekst!");
      } else {
          document.getElementById("myUL").appendChild(listItem);
      }
      document.getElementById("taskText").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      listItem.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}