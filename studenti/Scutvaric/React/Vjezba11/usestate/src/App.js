import { useState } from 'react';
import { UserFunction, UserChildren, UserClass } from './user/index';

function App() {


  const [users, setUsers] = useState([
    {name: 'Ivan', years: 30},
    {name: 'Marko', years: 35},
    {name: 'Ana', years: 25}
  ]);

  const [childrenText, setChildrenText] = useState("A hobi mi je skijanje");

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return {...user, years: user.years+1};
    });
    setUsers(newUsers);
  }


  return(
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={btnClickHandler}>Promjena godina</button>
      </>
    );
}

export default App;