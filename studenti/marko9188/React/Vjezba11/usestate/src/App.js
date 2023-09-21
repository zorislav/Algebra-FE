import React, {useState} from 'react';
// import UserFunction from './components/UserFunction';
import './App.css';
// import UserClass from './components/UserClass';
import {UserFunction, UserClass, UserChildren} from './components';


const users = [
  {name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}
];
const App = () => {

  // const [vrijednsot, funkcija] = useState(pocetno_stanje);
  const[users, setUsers] = useState([{name: 'Ivan', years:30},{name:'Marko', years:35},{name:'Ana', years:25}]);

  const [childrenText, setChildrenText] = useState('A hobi mi je plivanje.')

   
  

     const btnClickHandler = () => {
      console.log('klinuo sam');
      const newUsers = users.map(user => {
        return {
          ...user, years: user.years +1
        };
      });

      setUsers(newUsers);
     }  
    

     return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={btnClickHandler}>Promjena godina</button>
        {/* <button onClick={this.btnClickHandler1.bind(this)}>Promjena godina</button>
        <button onClick={()=>{this.btnClickHandler1()}}>Promjena godina2</button> */}
      </>
    )
  
      }

export default App;
