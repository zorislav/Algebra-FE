import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    filter: "all", // 'all', 'active', 'completed'
  };

  addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
  };

  toggleTodo = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  deleteTodo = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  };

  clearCompleted = () => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => !todo.completed),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todos, filter } = this.state;

    let filteredTodos = todos;
    if (filter === "active") {
      filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      filteredTodos = todos.filter((todo) => todo.completed);
    }

    return (
      <div className="container mt-4">
        <h1>TODO Aplikacija</h1>
        <TodoInput addTodo={this.addTodo} />

        <div className="mt-3">
          <ButtonGroup>
            <Button
              variant={filter === "all" ? "primary" : "outline-primary"}
              onClick={() => this.setFilter("all")}
            >
              Svi
            </Button>
            <Button
              variant={filter === "active" ? "primary" : "outline-primary"}
              onClick={() => this.setFilter("active")}
            >
              Aktivni
            </Button>
            <Button
              variant={filter === "completed" ? "primary" : "outline-primary"}
              onClick={() => this.setFilter("completed")}
            >
              Dovršeni
            </Button>
          </ButtonGroup>
        </div>

        <TodoList
          todos={filteredTodos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />

        <div className="mt-3">
          <Button variant="danger" onClick={this.clearCompleted}>
            Obriši dovršene
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
