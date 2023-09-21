import React from 'react';
// import UserFunction from './components/UserFunction';
import './App.css';
// import UserClass from './components/UserClass';
import {UserFunction, UserClass, UserChildren} from './components';


const users = [
  {name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}
];

class App extends React.Component {
  render() {
    return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>A hobi mi je plivanje </UserChildren>
      </>
    )
  }
}

export default App;
