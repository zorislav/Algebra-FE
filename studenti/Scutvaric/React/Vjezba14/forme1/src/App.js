import { Component } from 'react';

import './App.css';


class App extends Component {

  state = {
    name: '',
    form: {
      ime: '',
      prezime: ''
    }
  };

  // constructor (props) {
  //   super(props);
  // }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;

    // Šaljemo podatke...
    alert(`Ime: ${name}`);

    this.setState({name: ''});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ime:
          <input type="text" id="Ime" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <button>Pošalji</button>
        <input type="submit"/>
      </form>
    );
  }
}

export default App;
