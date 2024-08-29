
import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


class AddTodoForm extends React.Component {

  state = {
    newItem: "",
  };

  handleAddTodoClick(event){
    event.preventDefault();

    const { addTodo } = this.props;
    const { newItem } = this.state;
    
    if(!newItem || !newItem.trim()) {
      return;
    }

    addTodo(newItem);
    this.setState({ newItem: ""});
  }

  handleChange(event){
    const newItem = event.target.value;
    this.setState({newItem: newItem});
  }

  render(){

    const { newItem } = this.state
    

    return(
        <InputGroup>
          <FormControl value={ newItem } onChange={this.handleChange.bind(this)}></FormControl>
          <Button type='submit' variant="online-secondary" onClick={this.handleAddTodoClick.bind(this)}>Add</Button>
        </InputGroup>
    );
  }
}

export default AddTodoForm;