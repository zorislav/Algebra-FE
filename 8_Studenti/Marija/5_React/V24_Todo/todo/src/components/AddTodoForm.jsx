import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newItem: event.target.value });
  }

  handleAddTodoClick = (event) => {
    event.preventDefault();

    const { addTodo } = this.props;
    const { newItem } = this.state;

    if (!newItem || !newItem.trim()) {
      alert("Upiši todo!");
      return;
    }
    addTodo(newItem);

    this.setState({ newItem: "" });
  };

  render() {
    const { newItem } = this.state;

    return (
      <InputGroup>
        <FormControl
          placeholder="Add Todo"
          value={newItem}
          onChange={this.handleChange}
        ></FormControl>
        <Button
          type="submit"
          variant="primary"
          onClick={this.handleAddTodoClick}
        >
          Add
        </Button>
      </InputGroup>
    );
  }
}

export default AddTodoForm;
