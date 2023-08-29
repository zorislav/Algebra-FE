
import { Todo } from 'vjezba28_todo2_npm_paket';

Todo.prototype.init = function() {
    this.addListeners();
    }
        
    const todo = new Todo();

    window.addEventListener('load', todo.init());




