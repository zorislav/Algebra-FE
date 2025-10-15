import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class TodoItem extends React.Component {

  render(){

    const { todo } = this.props;

    return (
      <ListGroupItem>
        {todo.text}
      </ListGroupItem>
    );
  }
}

export default TodoItem;