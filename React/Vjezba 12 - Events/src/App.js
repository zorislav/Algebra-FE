import React from 'react';
// import UserFunction from './components/UserFunction';
// import UserClass from './components/UserClass';
import {UserFunction, UserClass, UserChildren} from './components';
import './App.css';

class App extends React.Component {

  state = {
    users: [{name: "Ivan", years: 30}, {name: "Marko", years: 35}, {name: "Ana", years: 25}],
    childrenText: "A hobi mi je plivanje."
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map(user => {
      return {...user, years: user.years +1};
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({users: newUsers})
  }

  render() {

    const { users, childrenText } = this.state;

    return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi!</p>
        <UserFunction name={this.state.users[0].name} years={this.state.users[0].years} onNameChange={this.nameChangeHandler}/>
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </>
    );
  }
  
}

export default App;