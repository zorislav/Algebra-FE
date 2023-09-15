import React from 'react';

class App extends React.Component {

  state = {
    name: ''
  };

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    alert(`Ime: ${name}`);
    this.setState({name: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input id="ime" type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <button>Pošalji</button>
      </form>
    );
  }

}

export default App;
