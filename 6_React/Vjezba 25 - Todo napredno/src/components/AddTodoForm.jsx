import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import  { connect } from 'react-redux';
import { ADD_TODO } from '../store/redux-store'; 

class AddTodoForm extends React.Component {

  state = {
    newItem: ''
  };

  handleAddTodoClick(event){
    event.preventDefault();

    const { newItem } = this.state;
    const { addTodo } = this.props;
    
    if(!newItem || !newItem.trim()) {
      return;
    }

    addTodo(newItem);

    this.setState({ newItem: ''});
  }

  handleChange(event){
    const newItem = event.target.value;
    this.setState({newItem: newItem});
  }

  render() {

    const { newItem } = this.state;

    return (
      <>
        <InputGroup size='lg' >
          <FormControl value={newItem} onChange={this.handleChange.bind(this)} placeholder='Add Todo' aria-describedby='basic-id' ></FormControl>
          <Button type='submit' variant='online-secondary' id='button-id' onClick={this.handleAddTodoClick.bind(this)}>Add</Button>
        </InputGroup>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (textValue) => dispatch({type: ADD_TODO, payload: {id: Math.random().toString(36).substr(2, 9), text: textValue, completed: false }}),
  };
}

export default connect(null,mapDispatchToProps)(AddTodoForm);

AddTodoForm.propTypes = {
  addTodo: PropTypes.func
}