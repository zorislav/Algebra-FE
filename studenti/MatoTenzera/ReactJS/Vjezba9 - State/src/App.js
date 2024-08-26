import React from 'react';
import './App.css';
import { UserFunction,UserClass,UserChildren } from './user';



class App extends React.Component{

  state = {

    users : [
      {
        name:"ivan",
        years: 30
      },
      {
        name:"marko",
        years: 20
      },
      {
        name:"ana",
        years: 25
      }
    ],

    childrenText: "plivanje"

  };


  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ovo radi!</p>
        <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years}/>
        <UserClass ime={this.state.users[1].name} godine={this.state.users[1].years}/>
        <UserChildren ime={this.state.users[2].name} godine={this.state.users[2].years} fontSize="30px">plivanje--ovdje definiramo vrijednost prop od children</UserChildren>
        <UserChildren godine={this.state.users[2].years}> {this.state.childrenText} </UserChildren>

      </div>
    );
  }
}

export default App;
