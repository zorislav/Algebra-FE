import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SearchForm = ({ onSearch, disabled }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Upiši GitHub korisničko ime!");
    onSearch(name.trim());
  };

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <Form.Group>
        <Form.Label>GitHub korisničko ime</Form.Label>
        <Form.Control
          type="text"
          placeholder="npr. facebook"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
      </Form.Group>
      <div className="d-grid mt-3">
        <Button type="submit" variant="primary" disabled={disabled}>
          {disabled ? "Pretražujem..." : "Pretraži"}
        </Button>
      </div>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
