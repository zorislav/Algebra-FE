import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){//konstruktor je ono sto se izvrsava kada se objekt inicijalizira na osnovu klase

    super();

    this.state = {
      text:"bok"
    };

    this.btn1ClickHandler = this.btn1ClickHandler.bind(this);

  }

  btn1ClickHandler(){
    this.setState({text:"ivica"});
  }

  btn2ClickHandler = () => {
    this.setState({text:"marica"});
  }

  render(){
    return (
      <div className="App">
        <h1>Class komponenta stanje dodatno</h1>
        <h2>{this.state.text}</h2>
        <button onClick={this.btn1ClickHandler}>promjeni tekst1</button>
        <button onClick={this.btn2ClickHandler }>promjeni tekst2</button>
      </div>
    );

  }

}

export default App;
