import React from 'react';
// import UserFunction from './components/UserFunction';
import './App.css';
// import UserClass from './components/UserClass';
import {UserFunction, UserClass, UserChildren} from './components';


const users = [
  {name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}
];

class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     users: [{name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}],
  //     childrenText: 'A hobi mi je plivanje.'
  //   };
  // }

   state = {
   users: [{name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}],
   childrenText: 'A hobi mi je plivanje.'
  };


  render() {

    const {users, childrenText} = this.state;

    return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
      </>
    )
  }
}

export default App;
