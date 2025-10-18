import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, InputGroup } from "react-bootstrap";

function SearchForm({ onSearch, onReset }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSearch(value.trim());
  };

  return (
    <Form onSubmit={submit} className="mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Unesi GitHub username (npr. facebook)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setValue("");
            onReset();
          }}
        >
          Reset
        </Button>
      </InputGroup>
    </Form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default SearchForm;
