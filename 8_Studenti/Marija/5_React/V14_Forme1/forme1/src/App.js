import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;

    alert(`Ime: ${name}`);
    this.setState({ name: "" });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1>Obrasci 1</h1>
        <form onSubmit={this.handleSubmit}>
          {/*  <label htmlFor="ime">Ime: </label>
            <input
            id="ime"
            type="text"
            value={name}
            onChange={this.handleChange}
          /> */}
          <label>
            Ime:
            <input
              id="ime"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
}

export default App;
