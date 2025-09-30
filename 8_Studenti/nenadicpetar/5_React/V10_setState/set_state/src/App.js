import { Component, useState } from "react";
import FunctionComponent1 from "./components/FunctionComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";
import ClassComponent1 from "./components/ClassComponent1";
import ButtonComponent from "./components/ButtonComponent"; //nova komponenta
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // inicijalizacija statea
    this.state = {
      korisnici: [
        { ime: "Kata", godine: 36 },
        { ime: "Ana", godine: 73 },
        { ime: "Josip", godine: 68 },
      ],
    };
  }

  promijeniGodine = () => {
    const noviKorisnici = this.state.korisnici.map((k) => {
      return { ...k, godine: k.godine + 1 }; //povećavamo godine za 1
    });

    this.setState({ korisnici: noviKorisnici });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Popis korisnika</h1>
        <FunctionComponent1
          ime={this.state.korisnici[0].ime}
          godine={this.state.korisnici[0].godine}
        />
        <ClassComponent1
          ime={this.state.korisnici[1].ime}
          godine={this.state.korisnici[1].godine}
        />
        <FunctionComponent2
          ime={this.state.korisnici[2].ime}
          godine={this.state.korisnici[2].godine}
        />
        <ButtonComponent promijeniGodine={this.promijeniGodine} />
      </div>
    );
  }
}

export default App;
