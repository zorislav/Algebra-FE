import React from "react";

import { users } from "./data/dummyData";
import { User, NewUser } from "./user";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
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

  nameChangeHandler = (event, index) => {
    const { users } = this.state;

    const newUsers = [...users];

    newUsers[index].name = event.target.value;

    this.setState({ users: newUsers });
  };

  addUserHandler = ({ name, age }) => {
    const { users } = this.state;
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age,
    };
    const newUsers = [...users, newUser];
    this.setState({ users: newUsers });
  };

  deleteUserHandler = (index) => {
    const { users } = this.state;

    const newUsers = [...users];

    newUsers.splice(index, 1);

    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <button onClick={this.btnClickHandler}>Uvećaj godine</button>
        <NewUser onAddUser={this.addUserHandler} />
        <hr />
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <User
                ime={user.name}
                years={user.years}
                onNameChange={(event) => {
                  this.nameChangeHandler(event, index);
                }}
                onDeleteUser={() => this.deleteUserHandler(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
