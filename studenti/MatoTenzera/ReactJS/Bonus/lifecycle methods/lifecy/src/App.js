import React, {useEffect,useState} from 'react';
import './App.css';

function FunkcijskaKomponenta(){
  const [poruka,setPoruka] = useState("hello");
  const [repos,setRepos] = useState([]);
  useEffect(()=>{  //component did update
    console.log("useEffect1");
    return()=>{  //cleanup fn
      console.log("useEffect1 - cleanup")
    }
  });
  useEffect(()=>{ //component did mount
    console.log("useEffect2");
    getList();
  },[]);
  function btnChangeHandler(){
    setPoruka("dobar dan");
  }
  function getList(){
    fetch("https://api.github.com/users/facebook/repos")
    .then((response)=>response.json())
    .then((responseData)=>{setRepos(responseData);})
  }
  return(
    <>
      <h2>funkcijska komponenta "lifecycle metode"</h2>
      <p>{poruka}</p>
      <button onClick={btnChangeHandler}>promjeni</button>
      {repos.map((repo,index)=>(<div key={index}>{repo.name}</div>))}
    </>
  );
}


class ClassKoponenta extends React.Component{

  constructor( ){
    super();
    this.state = {
      poruka:"bok",
      repos:[]
    };
  }

  getList =()=> {
    fetch("https://api.github.com/users/facebook/repos")
    .then((response)=>response.json())
    .then((responseData)=>{this.setState({repos:responseData});})
  }

  UNSAFE_componentWillMount(){
    //alert("class komponenta will mount");
  }

componentDidMount(){
    //alert("class komponenta did mount");
    this.getList();
  }

  UNSAFE_componentWillUpdate(){
    console.log("class komponenta will update");
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidUpdate(){
    console.log("class komponenta did update")
  }


  btnChangeHandler(){
    this.setState({poruka:"dobar Dan"})
  }

  render(){

    const {poruka,repos } = this.state;

    return (
      <>
      <h2>ClassKomponentalass lifecycle metode</h2>
      <p>{poruka}</p>
      <button onClick={this.btnChangeHandler.bind(this)}>promjeni</button>
      {repos.map((repo,index) => (
            <div key = {index}>{repo.name}</div>
          ) 
        )
      }
      </>
    );
  }
}


function App() {
  return (
    <div className="App">
      <h1>app</h1>
      {/* {<ClassKoponenta/>} */}
      <FunkcijskaKomponenta/>
    </div>
  );
}



export default App;
