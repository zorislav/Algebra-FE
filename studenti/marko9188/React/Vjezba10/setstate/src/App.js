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
  //   this.btnClickHandler1 = this.btnClickHandler1.bind(this);
  // }

   state = {
   users: [{name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}],
   childrenText: 'A hobi mi je plivanje.'
  };

    btnClickHandler = () => {
      console.log('klinuo sam');
      const newUsers = this.state.users.map(user => {
        return {
          ...user, years: user.years +1
        };
      });
      this.setState({users: newUsers})
    }

    // btnClickHandler1 () {
    //   console.log('klinuo sam');
    //   const newUsers = this.state.users.map(user => {
    //     return {
    //       ...user, years: user.years +1
    //     };
    //   });
    //   this.setState({users: newUsers})
    // }


  render() {

    const {users, childrenText} = this.state;

    return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        {/* <button onClick={this.btnClickHandler1.bind(this)}>Promjena godina</button>
        <button onClick={()=>{this.btnClickHandler1()}}>Promjena godina2</button> */}
      </>
    )
  }
}

export default App;
