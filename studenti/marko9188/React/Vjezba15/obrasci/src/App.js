import React from 'react';
import {User, NewUser} from './components';
import './App.css';

class App extends React.Component {

 
  state = {
    users: [
      {id: '1',name: "Ivan", years: 30},
      {id:'2',name: "Marko", years: 35}, 
      {id:'3',name: "Ana", years: 25}
    ],
    
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map(user => {
      return {...user, years: user.years +1};
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({users: newUsers});
  }

  addUserHandler = ({name, age})=> {
    console.log('Godine:'+age);
      const {users} = this.state;
      const newUser = {
        id: `${name}_${new Date().getTime}`,
        name: name,
        years: age
      }

      const newUsers= [...users,newUser];
      this.setState({users: newUsers});

  }

  deleteUserHandler=(event,index)=>{
    const {users} = this.state;

    const newUsers= [...users];
    newUsers.splice(index, 1);
    this.setState({users: newUsers});
  }

  render() {

    const { users } = this.state;


    return (
      <>
        <h1>React Aplikacija</h1>
        <p>Ovo stvarno radi!</p>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
          {users.map((usr,index)=>
          <User 
            key={usr.id}
             name={usr.name} 
             years={usr.years}
              onNameChange={(event)=> this.nameChangeHandler(event, index)} 
              onDeleteUser={(event)=> this.deleteUserHandler(event, index)} />
           )}
        <hr />
        <NewUser onAddUser={this.addUserHandler}/>
      </>
    );
  }
  
}

export default App;
