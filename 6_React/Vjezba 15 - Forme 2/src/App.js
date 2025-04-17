import React from 'react';
import { User, NewUser } from './user/index';

class App extends React.Component {

  state = {
    users: [
      {id: '1', name: 'Ivan', years: 30},
      {id: '2', name: 'Marko', years: 35},
      {id: '3', name: 'Ana', years: 25}
    ]
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years+1};
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event, index) => {
    
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({users: newUsers});
    
    return;
  }

  addUserHandler = ({name, age}) => {
    const { users } = this.state;
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age
    };
    const newUsers = [...users, newUser];
    this.setState({users: newUsers});
  }

  deleteUserHandler = (index) => {
    console.log(index);
    const { users } = this.state;
    const newUsers = [...users];
    newUsers.splice(index, 1);
    this.setState({users: newUsers});
  }

  render() {

    const { users } = this.state;

    return (
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        <ul>
          {
            users.map((user, index) => 
              <li key={user.id}>
                <User 
                  name={user.name} 
                  years={user.years} 
                  onNameChange={(event) => this.nameChangeHandler(event, index)}
                  onDeleteUser={() => this.deleteUserHandler(index)}
                />
              </li>
            )
          }
        </ul>
        <hr />
        <NewUser onAddUser={this.addUserHandler}/>
      </>
    );
  }
}

export default App;
