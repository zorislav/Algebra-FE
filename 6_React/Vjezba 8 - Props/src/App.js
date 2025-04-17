import React from 'react';
import { UserFunction, UserChildren, UserClass } from './user/index';

const users = [
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
];

class App extends React.Component {

  render(){
    return (
    <>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <UserFunction name={users[0].name} years={users[0].years} />
      <UserClass name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>A hobi mi je skijanje.</UserChildren>
    </>
    );
  }
}

export default App;
