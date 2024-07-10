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


    const newUsers = this.state.users.map((user) => {//ovdje map prolazi kroz elem niza i primjenjuje funkciju na njega,i ono sto funkc vrati stavlja u odgovarajuci elem novog niza
      return {...user,years:user.years + 1};//ovdje modificiramo years i povecavamo za 1
    })


    this.setState({users:newUsers});

  }


  render(){

    const {users,childrenText} = this.state; //izvlacenje iz state objekta niz users i childrenText

    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ovo radi!</p>
        <UserFunction ime={users[0].name} godine={users[0].years}/>
        <UserClass ime={users[1].name} godine={users[1].years}/>
        <UserChildren ime={users[2].name} godine={users[2].years} fontSize="30px">plivanje--ovdje definiramo vrijednost prop od children</UserChildren>
        <UserChildren godine={users[2].years}> {childrenText} </UserChildren>
        <button onClick={this.btnClickHandler}>promjena godina</button>

      </div>
    );
  }
}

export default App;
