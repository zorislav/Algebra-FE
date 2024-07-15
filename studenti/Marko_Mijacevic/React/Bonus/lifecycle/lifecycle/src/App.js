
import React, {useEffect, useState} from 'react';
import './App.css';

function FunkcijskaKomponenta(){

  const [poruka, setPoruka] = useState("Bok");
  const [repos, setRepos] = useState([]);

  //  zamjena za componentDidUpdate
  useEffect(() => {
    console.log("useEffect 1");

    return () => {
      //cleanup funkcija
      console.log("useEvect 1 - cleanup");
    }
  });

  // zamjena za componentDidMount
  useEffect(() => {
    console.log("useEffect 2");
    getList();

    // zamjena za "componentWillUnmount" - prije novog useEffect
    // return () => {
    //   //cleanup funkcija
    //   console.log("useEvect 2 - cleanup");
    // }
  }, []);

  function btnChangeHandler(){
    setPoruka("Dobar dan");
  }

  function getList(){
    fetch("https://api.github.com/users/facebook/repos")
    .then((rensponse) => rensponse.json())
    .then((responseData) => 
    {
      setRepos(responseData);
    })
  }

  return(
    <>
      <h2>Funkcijska Komponenta "Lifecycle Metode"</h2>
      <p>{poruka}</p>
      <button onClick={btnChangeHandler}>Promjeni</button>
      { 
        repos.map((repo, index) => 
        (
          <div key={index}>{repo.name}</div>
        )
      )}
    </>
  );
}

class ClassKomponenta extends React.Component{

  constructor(){
    super();
    this.state = {
      poruka: "Bok",
      repos: []
    };
  }

  getList = () => {
    fetch("https://api.github.com/users/facebook/repos")
    .then((rensponse) => rensponse.json())
    .then((responseData) => 
    {
      this.setState({repos: responseData});
    })
  }

  UNSAFE_componentWillMount(){
    // alert("ClassKomponenta will mount")
  }

  componentDidMount(){
    // alert("ClassKomponenta did mount")
    this.getList();
  }

  UNSAFE_componentWillUpdate(){
    console.log("ClassKomponenta will update");
  }

  btnChangeHandler(){
    this.setState({poruka: "Dobar dan"});
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidUpdate(){
    console.log("ClassKomponenta did update");
  }

  render(){

    const { poruka, repos } = this.state;

    return(
      <>
        <h2>Class Komponenta Lifecycle Metode</h2>
        <p>{poruka}</p>
        <button onClick={this.btnChangeHandler.bind(this)}>Promjeni</button>
        { 
        repos.map((repo, index) => 
        (
          <div key={index}>{repo.name}</div>
        )
      )}
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <ClassKomponenta /> */}
      <FunkcijskaKomponenta />
    </div>
  );
}

export default App;
