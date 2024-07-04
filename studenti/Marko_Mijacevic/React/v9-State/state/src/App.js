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

  render(){

    return(
      <div className="App">
        <h1>Reakt Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years} />
        <UserClass ime={this.state.users[1].name} godine={this.state.users[1].years} />
        <UserChildren ime={this.state.users[2].name} godine={this.state.users[2].years} fontSize="30px" >Plivanje</UserChildren>
        <UserChildren godine={this.state.users[2].years} >{this.state.childrenText}</UserChildren>
      </div>
    );
  }
}

export default App;