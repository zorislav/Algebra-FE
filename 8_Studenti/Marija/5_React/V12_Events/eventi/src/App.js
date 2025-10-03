import React from "react";

import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
      childrenText: "A hobi mi je plivanje.",
    };

    this.btnClickHandler = this.btnClickHandler.bind(this);
  }

  btnClickHandler() {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  }

  nameChangeHandler = (event) => {
    const { users } = this.state;

    const newUsers = [...users];

    newUsers[0].name = event.target.value;

    this.setState({ users: newUsers });
  };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction
          ime={this.state.users[0].name}
          years={this.state.users[0].years}
          onNameChange={this.nameChangeHandler}
        />
        <UserClass ime={users[1].name} years={users[1].years} />
        <UserChildren ime={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
        <button onClick={this.btnClickHandler}>Uvećaj godine</button>
      </div>
    );
  }
}

export default App;
