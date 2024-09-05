import React from 'react';


import { AddTodoForm, TodoList, VisibilityToolbar } from './components';
import { VISIBILITY_TYPES } from './constants/const';

import './App.css';


class App extends React.Component {

  state = {
    visibility: VISIBILITY_TYPES.ALL,
    todos: JSON.parse(localStorage.getItem('todos')) || [], 
  }

  componentDidUpdate(){
    localStorage.setItem('todos,',  JSON.stringify(this.state.todos));
  }

  handleVisibilityChange(visibility) {
    this.setState({visibility: visibility}) 

  }

  handleAddTodo(value){
    const { todos } = this.state 

    const newTodo = {
      id: Math.random().toString(36).substr(2,9),
      text: value,
      completed: false
    }

    this.setState({ todos: [...todos, newTodo]})
    console.log(value)

  }

  handleToggleTodo(id){

    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  handleRemoveTodo(id){
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  handleRemoveCompleted(){
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => !todo.completed)

    this.setState({ todos: newTodos });
  }

  getVisibleTodos(){
    const { visibility, todos } = this.state;

    if( visibility === VISIBILITY_TYPES.ALL){
      return todos;
    }

    if( visibility === VISIBILITY_TYPES.ACTIVE){
      return todos.filter((todo) => !todo.completed)

    }

    if( visibility === VISIBILITY_TYPES.COMPLETED){
      return todos.filter((todo) => todo.completed)
    }
  }

  render(){

    const { visibility } = this.state
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="App">
        <h1 className='header'>My Tasks</h1>
        <VisibilityToolbar 
        visibilityType={visibility} 
        onVisibilityChange={this.handleVisibilityChange.bind(this)}>
        </VisibilityToolbar>
        <div className='todo-container'>
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList 
          todos={visibleTodos} 
          toggleTodo={this.handleToggleTodo.bind(this)} 
          removeTodo={this.handleRemoveTodo.bind(this)} 
          />
        </div>
        <span className='btn-clear-all' 
        onClick={this.handleRemoveCompleted.bind(this)}
        >Clear completed</span>

      </div>
  );
  }

}

export default App;
