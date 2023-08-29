import React from 'react';

function ConditionalRendering(props) {

  const tekst = props.number === 1 && <h3>Ivan</h3>;

  return (
    <>
      <h2>Number?</h2>
      {tekst}
      { props.number === 2 && <h3>Luka</h3> }
      { props.number === 3 && <h3>Marko</h3> }
    </>
  );
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      number: null
    };
  }

  handleButtonClick(number) {
    this.setState((currState) => { 
      return {
        number: number
      };
    });
  };

  render(){
    return(
      <div>
        <p>Hello World!</p>
        <button onClick={() => this.handleButtonClick(1)}>1</button>
        <button onClick={() => this.handleButtonClick(2)}>2</button>
        <button onClick={() => this.handleButtonClick(3)}>3</button>
        <ConditionalRendering number={this.state.number} />
      </div>
    );
  }

}

export default App;