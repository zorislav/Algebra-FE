import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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

export default AddTodoForm;

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
}