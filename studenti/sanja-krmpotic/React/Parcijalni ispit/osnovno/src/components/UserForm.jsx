import React from "react";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";

class UserForm extends React.Component {

  state = { userName: '' };


  handleUserChange = (event) => {

    const userName = event.target.value;

    this.setState({userName});
  }

  handleUserSelected(event) {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;
    setUser(userName);
  }

  render() {

    const { userName } = this.state;
    return (
      <Form>
        <Form.Label>GitHub username:</Form.Label>
        <FormControl size='lg' placeholder='e.g. facebook' value={userName} onChange={this.handleUserChange} autoFocus></FormControl>
        <div className='d-grid gap-2'>
      <Button size='lg' variant='secondary' onClick={this.handleUserSelected.bind(this)} className='mt-5'>GO!</Button>
        </div>
      </Form>
    );
  }
}

export default UserForm;

UserForm.propTypes = {
  setUser: PropTypes.func
};