import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: VISIBILITY_TYPES.ALL,
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  }

  handleVisibilityChange(visibility) {
    this.setState({ visibility: visibility });
  }

  handleAddTodo(value) {
    const { todos } = this.state;
    const newTodo = {
      id: Math.random().toString(36).substring(2, 10),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  handleToggleTodo(id) {
    const { todos } = this.state;

    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;

    this.setState({ todos });
  }

  handleRemoveTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  handleRemoveCompleted() {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => !todo.completed);

    this.setState({ todos: newTodos });
  }

  getVisibleTodos() {
    const { todos, visibility } = this.state;
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }
    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
    return todos.filter((todo) => !todo.completed);
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  render() {
    const { visibility, todos } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const showClearCompleted =
      visibility === VISIBILITY_TYPES.ALL ||
      visibility === VISIBILITY_TYPES.COMPLETED;
    const hasCompleted = todos.filter((todo) => !!todo.completed).length > 0;

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityTypes={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList
            todos={visibleTodos}
            toggleTodo={this.handleToggleTodo.bind(this)}
            removeTodo={this.handleRemoveTodo.bind(this)}
          />
        </div>
        {visibleTodos && showClearCompleted && hasCompleted && (
          <span
            className="btn-clear-all"
            onClick={this.handleRemoveCompleted.bind(this)}
          >
            Clear Completed
          </span>
        )}
      </div>
    );
  }
}

export default App;
