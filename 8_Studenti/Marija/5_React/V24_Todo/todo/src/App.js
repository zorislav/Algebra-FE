import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: VISIBILITY_TYPES.ALL,
      todos: [
        {
          id: "1",
          text: "prvi",
          completed: false,
        },
        {
          id: "2",
          text: "drugi",
          completed: false,
        },
        {
          id: "3",
          text: "treći",
          completed: false,
        },
      ],
    };
  }

  handleVisibilityChange(visibility) {
    this.setState({ visibility: visibility });
  }

  render() {
    const { visibility, todos } = this.state;

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityTypes={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
