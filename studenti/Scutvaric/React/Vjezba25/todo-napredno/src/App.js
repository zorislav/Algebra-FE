import React from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { VisibilityToolbar, AddTodoForm, TodoList } from './components/index';
import { VISIBILITY_TYPES } from "./constants/const";
import { REMOVE_ALL_COMPLETED } from './store/redux-store';


import './App.css';

class App extends React.Component {

  state = {
    visibility: VISIBILITY_TYPES.ALL, 
  }

  componentDidMount() {
    const pathname  = window.location.href;
    const path = pathname.split('/').join(' ');
    console.log(path);

    if(path.includes(VISIBILITY_TYPES.ACTIVE)){
      this.setState({visibility: VISIBILITY_TYPES.ACTIVE});
    }
    if(path.includes(VISIBILITY_TYPES.COMPLETED)){
      this.setState({visibility: VISIBILITY_TYPES.COMPLETED});
    }
  }

  componentDidUpdate() {
    const { todos } = this.props;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getVisibleTodos() {
    const { visibility } = this.state;
    const { todos } = this.props;
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

  handleRemoveCompleted = () => {
    const { removeTodo } = this.props;
    removeTodo();
  }

  render() {

    const { visibility } = this.state;
    const { todos } = this.props;
    const visibleTodos = this.getVisibleTodos();
    const hasCompleted = todos.filter(todo => !!todo.completed).length > 0;

    return (
      <div className="app">
          <h1 className='header'>My Tasks</h1>
          <VisibilityToolbar visibilityType={visibility} onVisibilityChange={this.handleVisibilityChange.bind(this)}/>
          <div className='todo-container'>
            <AddTodoForm />
            <TodoList todos={visibleTodos}/>
          </div>
          {hasCompleted && visibleTodos && <span className='btn-clear-all' onClick={this.handleRemoveCompleted}>Clear Completed</span>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: () => dispatch({type: REMOVE_ALL_COMPLETED}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func
};