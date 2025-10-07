import React, { Component } from "react";
import MyContext from "../context/MyContext";

class ClassComponent extends Component {
  // povežemo komponentu s Context-om
  static contextType = MyContext;

  render() {
    const { tekst, broj } = this.context;

    return (
      <div>
        <h2>ClassComponent</h2>
        <p>Primljeni tekst: {tekst}</p>
        <p>Primljeni broj: {broj}</p>

        <hr />
        <h3>Korištenje varijabli u klasi:</h3>
        <p>Dužina teksta: {tekst.length} znakova</p>
        <p>Broj + 10 = {broj + 10}</p>
      </div>
    );
  }
}

export default ClassComponent;
