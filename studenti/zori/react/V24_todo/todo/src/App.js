import React from "react";

import { AddTodoForm, VisibilityToolbar, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

import "./App.css";

class App extends React.Component {
  state = {
    visibility: VISIBILITY_TYPES.ALL,
    todos: [
      { id: "1", text: "Prvi", completed: true },
      { id: "2", text: "Drugi", completed: false },
    ],
  };

  handleVisibilityChange(visibility) {
    this.setState({ visibility: visibility });
  }

  handleAddTodo(value) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  render() {
    const { visibility } = this.state;

    return (
      <div className="app">
        <h1 className="header">My Tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
