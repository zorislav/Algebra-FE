import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class AddTodoForm extends React.Component {
    
    state = {
        newItem: ''
    };

    handleChange (event) {
        const newItem = event.target.value;
        this.setState ({newItem: newItem});
    }

    handleAddTodoClick(event) {
        event.preventDefault();

        const { newItem } = this.state;
        const { addTodo } = this.props;

        if(!newItem || !newItem.trim()) {
            return;
        }

        addTodo(newItem);

        this.setState({newItem: ''});

    }

    render () {

        const { newItem } = this.state;
        return (
            <>
            <InputGroup size='lg'>
            <FormControl className='form-control' value={newItem}  onChange={this.handleChange.bind(this)} placeholder='Add Todo'></FormControl>
            <Button type='submit' variant='online-secondary' onClick={this.handleAddTodoClick.bind(this)}>Add</Button>
                </InputGroup>
            </>
        );
    }
}

export default AddTodoForm;

AddTodoForm.propTypes = {
    addTodo: PropTypes.func
}