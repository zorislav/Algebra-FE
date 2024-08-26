import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Form from "react-bootstrap/Form";

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <ListGroup.Item className="todo-item">
        <span className="todo-item_item">
          <Form.Check checked={todo.completed}></Form.Check>
          <span className="todo-item_text">{todo.text}</span>
        </span>
        <span>X</span>
      </ListGroup.Item>
    );
  }
}

export default TodoItem;
