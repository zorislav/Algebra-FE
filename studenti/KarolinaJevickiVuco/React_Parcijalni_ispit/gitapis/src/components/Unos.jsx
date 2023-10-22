import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';

class Unos extends React.Component {

  state = { userName: ''};

  handleNoviUnos = (event) => {
    const userName = event.target.value;
    this.setState({userName});
  }

  handleGoClick = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;
    setUser(userName);
  }

  render() {

    const { userName } = this.state;
    return (
      <Form>
        <Form.Label>GitHub username: </Form.Label>
        <FormControl size='lg' placeholder='e.g. facebook' value={userName} onChange={this.handleNoviUnos} autoFocus></FormControl>
        <div className='d-grid i gap2'>
          <Button className='mt-5' onClick={this.handleGoClick}>GO!</Button>
        </div>
      </Form>

    );
  }
}

export default Unos;

Unos.propTypes = {
  setUser: PropTypes.func
}