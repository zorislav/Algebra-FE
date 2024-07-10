import React from 'react';
import './App.css';
import { UserFunction,UserClass,UserChildren } from './user';

const users = [
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
];

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ovo radi!</p>
        <UserFunction ime={users[0].name} godine={users[0].years}/>
        <UserClass ime={users[1].name} godine={users[1].years}/>
        <UserChildren ime={users[2].name} godine={users[2].years} fontSize="30px">plivanje--ovdje definiramo vrijednost prop od children</UserChildren>

      </div>
    );
  }
}

export default App;
