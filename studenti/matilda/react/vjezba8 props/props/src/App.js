import React from "react";
import "./App.css";

import { UserFunction, UserClass } from "./user";

const users = [
  {
    name: "Ivan",
    years: 30,
  },
  {
    name: "Marko",
    years: 25,
  },
  {
    name: "Ana",
    years: 25,
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} godine={users[0].years} />
        <UserClass ime={users[1].name} godine={users[1].years} />
      </div>
    );
  }
}

export default App;
