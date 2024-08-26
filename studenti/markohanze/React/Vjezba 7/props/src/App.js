import React from 'react';
import './App.css';

import { UserFunction, UserClass, UserChildren } from './user';

const users = [
{
  name: "Ivan",
  years: 30
},
{
  name: "Marko",
  years: 20
},
{
  name: "Ana",
  years: 23
}

];

class App extends React.Component {

render() {

  return (
    <div className="App">
     <h1>react app </h1>
     <p>ovo je app</p>
     <UserFunction ime={users[0].name} godine={users[0].years} />
     <UserFunction ime={users[1].name} godine={users[1].years}/>
     <UserChildren ime={users[2].name} godine={users[2].years}/> 
     
     {/* plivanje</UserChildren> */}
    </div>
  );
}
}

export default App;
