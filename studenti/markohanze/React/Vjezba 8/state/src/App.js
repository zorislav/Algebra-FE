import React from 'react';
import './App.css';

import { UserFunction, UserClass, UserChildren } from './user';

// const users = [
// {
//   name: "Ivan",
//   years: 30
// },
// {
//   name: "Marko",
//   years: 20
// },
// {
//   name: "Ana",
//   years: 23
// }

// ];

class App extends React.Component {
  
  state = {
    users: [
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
    ],
    childrenText: "plivanje"
  };

render() {

  return (
    <div className="App">
     <h1>react app </h1>
     <p>ovo je app</p>
     <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years} />
     <UserFunction ime={this.state.users[1].name} godine={this.state.users[1].years}/>
     <UserChildren ime={this.state.users[2].name} godine={this.state.users[2].years}/>
     <UserChildren godine={this.state.users[2].years}></UserChildren>
     
     {/* plivanje</UserChildren> */}
    </div>
  );
}
}

export default App;
