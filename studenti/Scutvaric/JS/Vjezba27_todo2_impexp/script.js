
import { Todo } from './todo.js';

Todo.prototype.init = function() {
    this.addListeners();
    }
        
    const todo = new Todo();

    window.addEventListener('load', todo.init());




