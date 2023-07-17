import { Todo } from 'todo23npm';

Todo.prototype.init = function() {
  this.addListeners();
}

const todo = new Todo();

window.addEventListener('load', todo.init());

 
