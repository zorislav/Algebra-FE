import React from "react";
import "./App.css";
import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";

//const users = [
//  {
//    name: "Ivan",
//    years: 30,
//  },
//  {
//    name: "Marko",
//    years: 25,
//  },
//  {
//    name: "Ana",
//    years: 25,
//  },
//];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} years={users[0].years} />
        <UserClass ime={users[1].name} years={users[1].years} />
        <UserChildren ime={users[2].name} years={users[2].years}>
          {" "}
          I hobi mi je skijanje.
        </UserChildren>
      </div>
    );
  }
}

export default App;
