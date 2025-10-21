import React from "react";
import PropTypes from "prop-types";
import { ListGroup, FormCheck, Button } from "react-bootstrap";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-center"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <FormCheck
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        label={todo.text}
      />
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Obriši
      </Button>
    </ListGroup.Item>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
