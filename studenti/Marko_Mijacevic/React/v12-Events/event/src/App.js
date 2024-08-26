import React from 'react';
import './App.css';

import { UserFunction, UserClass, UserChildren } from './user';


class App extends React.Component{

  state = {
    users: [
      {
        name: 'Ivan',
        years: 30
      },
      {
        name: 'Marko',
        years: 35
      },
      {
        name: 'Ana',
        years: 25
      }
    ],
    childrenText: "plivanje"
  };

  btnClickHandler = () => {

    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years + 1};
    })

    this.setState({ users:newUsers });
  }


  nameChangeHandler = (event) => {

    const { users } = this.state;

    const newUsers = [...users]; //this.state.users
    newUsers[0].name = event.target.value;

    this.setState({ users: newUsers });
  }


  render(){

    const { users, childrenText } = this.state;

    return(
      <div className="App">
        <h1>Reakt Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} godine={users[0].years} onNameChange={this.nameChangeHandler} />
        <UserClass ime={users[1].name} godine={users[1].years} />
        <UserChildren ime={users[2].name} godine={users[2].years} fontSize="30px" >Plivanje</UserChildren>
        <UserChildren godine={users[2].years} >{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}

export default App;