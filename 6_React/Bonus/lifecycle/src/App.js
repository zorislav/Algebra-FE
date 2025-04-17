import React, { useEffect, useState } from "react";
import "./App.css";

class ClassKomponenta extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };
  }

  getList = () => {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((responseData) => this.setState({repos: responseData }));
  };

  UNSAFE_componentWillMount() {
    console.log("Class Komponenta will mount");
    alert("Class Komponenta will mount");
  }

  componentDidMount() {
    console.log("Class Komponenta did mount");
    alert("Class Komponenta did mount");
    // ažuriranje prikaza
    this.getList();
  }

  UNSAFE_componentWillUpdate() {
    console.log("Class Komponenta will update");
  }

  componentDidUpdate() {
    console.log("Class Komponenta did update");
  }

  shouldComponentUpdate(){
    return true;
  }

  render() {

    const {repos } = this.state;

    return ( 
      <>
      <h2>Class Komponenta Lifecycle Metode</h2>
      { repos.map((repo, index) => 
        (
          <div key={index}>
            <strong>{repo.name}</strong>
          </div>
        )
      )}
      </>
    );
  }
}

function FunkcijskaKomponenta(){

  const [repos, setRepos] = useState([]);

  function getList() {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((responseData) => setRepos(responseData));
  };

  useEffect(() => {
    console.log("Running useEffect2...");
  });

  useEffect(() => {

    console.log("Running useEffect...");
    getList();
  
  }, []);

  return (
    <>
      <h2>Funkcijska Komponenta "Lifecycle" Metode</h2>
      { repos.map((repo, index) => 
        (
          <div key={index}>
            <strong>{repo.name}</strong>
          </div>
        )
      )}
    </>
  );  
} 


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ClassKomponenta />
      {/* <FunkcijskaKomponenta /> */}
    </div>
  );
}

export default App;
