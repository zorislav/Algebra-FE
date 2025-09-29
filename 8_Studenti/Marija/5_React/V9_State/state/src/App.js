import React from "react";
import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";

import "./App.css";

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
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      childrenText: "A hobi mi je plivanje.",
    };
  }

  // state = {
  //   users: [
  //     {
  //       name: "Ivan",
  //       years: 30,
  //      },
  //    {
  //    name: "Marko",
  //    years: 25,
  //  },
  //    {
  //     name: "Ana",
  //     years: 25,
  //   },
  //  ],
  //  childrenText: "A hobi mi je plivanje.",
  // };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div>
        <h1>React aplikacija - V9</h1>
        <p>Ovo zaista radi</p>
        <UserFunction
          ime={this.state.users[0].name}
          years={this.state.users[0].years}
        />
        <UserClass ime={users[1].name} years={users[1].years} />
        <UserChildren ime={users[2].name} years={users[2].years}>
          {this.state.childrenText}
        </UserChildren>
      </div>
    );
  }
}
export default App;
