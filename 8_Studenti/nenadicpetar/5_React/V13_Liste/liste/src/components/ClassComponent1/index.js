import React, { Component } from "react";

class ClassComponent1 extends Component {
  state = { animate: false };

  componentDidUpdate(prevProps) {
    if (prevProps.korisnik.ime !== this.props.korisnik.ime) {
      this.setState({ animate: true }, () => {
        setTimeout(() => this.setState({ animate: false }), 500);
      });
    }
  }

  render() {
    const { korisnik, promijeniIme, boja } = this.props;
    const { animate } = this.state;
    return (
      <div className={`user-card ${boja} ${animate ? "animate" : ""}`}>
        <p>
          {korisnik.ime} ({korisnik.godine} godina)
        </p>
        <input
          type="text"
          value={korisnik.ime}
          onChange={(e) => promijeniIme(e.target.value)}
        />
      </div>
    );
  }
}

export default ClassComponent1;
