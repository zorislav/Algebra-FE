import React from 'react';
import './App.css';
import { UserFunction,UserClass,UserChildren } from './user';

class App extends React.Component{

  state = {

    users : [
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
    ],

    childrenText: "plivanje"

  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {...user,years:user.years + 1};
    })

    this.setState({users:newUsers});

    }

//ova funk azurira prvi users niz elem prema vrijednosti postavlja name svojstvo kod prvog objekta na ono sto je upisano u input elem u userFunction komponenti
    nameChangeHandler=(event)=> {
        const {users} = this.state;
        const newUsers = [...users];
        newUsers[0].name = event.target.value;
        this.setState({users:newUsers});
    }

  render(){

    const {users,childrenText} = this.state;

    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ovo radi!</p>
        <UserFunction ime={users[0].name} godine={users[0].years} onNameChange={this.nameChangeHandler} />
        <UserClass ime={users[1].name} godine={users[1].years}/>
        <UserChildren ime={users[2].name} godine={users[2].years} fontSize="30px">plivanje--ovdje definiramo vrijednost prop od children</UserChildren>
        <UserChildren godine={users[2].years}> {childrenText} </UserChildren>
        <button onClick={this.btnClickHandler}>promjena godina</button>

      </div>
    );
  }
}

export default App;
