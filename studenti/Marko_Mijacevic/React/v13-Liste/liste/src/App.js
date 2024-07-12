import React from 'react';
import './App.css';

import { UserFunction, UserClass, UserChildren } from './user';


class App extends React.Component{

  state = {
    users: [
      {
        id: "1",
        name: 'Ivan',
        years: 30
      },
      {
        id: "2",
        name: 'Marko',
        years: 35
      },
      {
        id: "3",
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


  nameChangeHandler = (event, index) => {

    const { users } = this.state;

    const newUsers = [...users];
    newUsers[index].name = event.target.value;

    this.setState({ users: newUsers });
  }


  render(){

    const { users, childrenText } = this.state;

    return(
      <div className="App">
        <h1>Reakt Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <ul>
          {
            users.map((user, index)=>
            <li key={user.id} >
              <UserFunction
                ime={user.name}
                godine={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, index)}
              /> 
            </li>)
          }
        </ul>
        <UserFunction ime={users[0].name} godine={users[0].years} onNameChange={(event) => this.nameChangeHandler(event, 0)} />
        <UserClass ime={users[1].name} godine={users[1].years} />
        <UserChildren ime={users[2].name} godine={users[2].years} >{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}

export default App;