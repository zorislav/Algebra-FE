
import ListGroup from 'react-bootstrap/ListGroup';

import { TodoItem } from "./index";

function TodoList({todos, toggleTodo, removeTodo}) {

  return (
    <ListGroup>
      {
        todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        })
      }
    </ListGroup>
  );
}

export default TodoList;
