import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";

class TodoItem extends React.Component {
  handleToggleTodoClick = () => {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  };

  handleRemoveTodoClick() {
    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? "todo-item_text todo-item_completed"
      : "todo-item_text";

    return (
      <ListGroupItem className="todo-item">
        <span className="todo-item_item" onClick={this.handleToggleTodoClick}>
          <FormCheck readOnly checked={todo.completed} />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span
          className="todo-item_delete-button"
          onClick={this.handleRemoveTodoClick.bind(this)}
        >
          X
        </span>
      </ListGroupItem>
    );
  }
}

export default TodoItem;
