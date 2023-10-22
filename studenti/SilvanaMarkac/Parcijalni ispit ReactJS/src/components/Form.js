import React from "react";
import Main from "./Main";
import Repo from "./Repo";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      korisnickoIme: "",
      dohvatiPodatke: false,
      invalidInput: false,
    };
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value;
    this.setState({ korisnickoIme: searchValue });
  };

  povratak = () => {
    window.location.reload(false);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const ime = this.state.korisnickoIme;

    if (ime) {
      this.setState({ dohvatiPodatke: true, invalidInput: false });
    } else {
      this.setState({ invalidInput: true });
    }
  };

  render() {
    if (!this.state.dohvatiPodatke) {
      return (
        <div className="formDiv">
          <form className="form" onSubmit={this.handleSubmit}>
            <label>GitHub username:</label>
            <input
              className="inputKorisnik"
              type="text"
              placeholder="e.g. facebook"
              onChange={this.onSearchChange}
            />
            <br />
            {this.state.invalidInput && (
              <p className="errorText">Please enter a valid username</p>
            )}
            <br />
            <input className="btnGo" type="submit" value="GO!" />
          </form>
        </div>
      );
    } else {
      return (
        <div className="sviPodaci">
          <Main korisnickoIme={this.state.korisnickoIme} />
          <Repo korisnickoIme={this.state.korisnickoIme} />
          <button className="btnReset" onClick={this.povratak}>
            Reset
          </button>
        </div>
      );
    }
  }
}

export default Form;
