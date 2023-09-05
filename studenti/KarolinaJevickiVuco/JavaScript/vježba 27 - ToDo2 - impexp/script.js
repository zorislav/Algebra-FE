import {Todo} from todo23npm;
  Todo.prototype.init = function() {    //funkcija definirana na prototipu objekta 
  this.addListeners();                  //dodaje event listenere 
};

  const todo = new Todo();   //kreira to do
  window.addEventListener('load', todo.init());  //kad se event load dogodi, odradi se init funk. na todo objektu - gore su definirani event listener

