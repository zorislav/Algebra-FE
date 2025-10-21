import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Dodaj novi zadatak"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="success">
          Dodaj
        </Button>
      </InputGroup>
    </form>
  );
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
