import React from 'react';

import { VisibilityToolbar, AddTodoForm, TodoList } from './components/index';
import { VISIBILITY_TYPES } from "./constants/const";

import './App.css';

class App extends React.Component {

  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    visibility: VISIBILITY_TYPES.ALL, 
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  handleAddTodo(value){
    const { todos } = this.state;
    const newTodo = { id: Math.random().toString(36).substr(2, 9), text: value, completed: false };
    this.setState({ todos: [...todos, newTodo]});
  }

  getVisibleTodos() {
    const { todos, visibility } = this.state;
    if (visibility === VISIBILITY_TYPES.ALL){
      return todos;
    }

    if(visibility === VISIBILITY_TYPES.COMPLETED){
      return todos.filter(todo => todo.completed);
    }

    return todos.filter(todo => !todo.completed);
  }

  handleVisibilityChange(visibility){
    this.setState({visibility: visibility});
  }

  handleToggleTodo(id){
    const { todos } = this.state;
    const todo = todos.find(item => item.id === id);
    todo.completed = !todo.completed;
    this.setState({todos});
  }

  handleRemoveTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos});
  }

  handleRemoveCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.completed);
    this.setState({ todos: newTodos});
  }

  render() {

    const { todos, visibility } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const hasCompleted = todos.filter(todo => !!todo.completed).length > 0;

    return (
      <div className="app">
          <h1 className='header'>My Tasks</h1>
          <VisibilityToolbar visibilityType={visibility} onVisibilityChange={this.handleVisibilityChange.bind(this)}/>
          <div className='todo-container'>
            <AddTodoForm addTodo={this.handleAddTodo.bind(this)}/>
            <TodoList todos={visibleTodos} toggleTodo={this.handleToggleTodo.bind(this)} removeTodo={this.handleRemoveTodo.bind(this)}/>
          </div>
          {hasCompleted && visibleTodos && <span className='btn-clear-all' onClick={this.handleRemoveCompleted}>Clear Completed</span>}
      </div>
    );
  }
}

export default App;
