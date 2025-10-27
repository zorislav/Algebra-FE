import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchForm({ onSearch }) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(userName);
    setUserName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>GitHub username:</Form.Label>
      <FormControl
        size="lg"
        placeholder="e.g. facebook"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        autoFocus
      />
      <div className="d-grid gap-2 mt-3">
        <Button type="submit" size="lg" variant="secondary">
          GO!
        </Button>
      </div>
    </Form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
