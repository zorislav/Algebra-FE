import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      text: "Bok"
    };

    this.btn1ClickHandler = this.btn1ClickHandler.bind(this);
  }

  btn1ClickHandler() {
    this.setState({ text: "Ivica"});
  }

  btn2ClickHandler = () => {
    this.setState({ text: "Marica"});
  }

  render() {
    return (
      <div className="App">
        <h1>Class komponenta stanje dodatno</h1>
        <h2>{this.state.text}</h2>
        <button onClick={this.btn1ClickHandler}>Promjeni tekst1</button>
        <button onClick={this.btn2ClickHandler}>Promjeni tekst2</button>
      </div>
    );    
  }
}

export default App;
