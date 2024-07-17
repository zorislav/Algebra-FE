import React from "react";
import { UserFunction, UserChildren, UserClass } from "./user/index";

class App extends React.Component {
  state = {
    users: [
      { id: "1", name: "Ivan", years: 30 },
      { id: "2", name: "Marko", years: 35 },
      { id: "3", name: "Ana", years: 25 },
    ],
    childrenText: "A hobi mi je skijanje",
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });

    return;
  };

  render() {
    const { users, childrenText } = this.state;

    return (
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <UserFunction
                name={user.name}
                years={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, index)}
              />
            </li>
          ))}
        </ul>

        <UserFunction
          name={this.state.users[0].name}
          years={this.state.users[0].years}
          onNameChange={(event) => this.nameChangeHandler(event, 0)}
        />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </>
    );
  }
}

export default App;
