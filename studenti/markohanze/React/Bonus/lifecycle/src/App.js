import React from 'react';
import './App.css';

class ClassKomponenta extends React.Component {

  constructor() {
    super ();
    this.state = {
      poruka: "bok"
    }
  }

UNSAFE_componentWillMount(){
alert("ClassKomponenta will mount");
};

componentDidMount() {
  alert("ClassKomponenta did mount");
};

componentWillUpdate() {
  console.log("ClassKomponenta will update");
};

btnChangehandler() {
 this.setState ({poruka: "bokic"});
}



  render() {

    const { poruka } = this.state;

    return (
<>

  <h2>Class komponenta lifecycle metoda</h2>
  <p>{poruka}</p>
  <button onClick={this.btnChangehandler.bind(this)}>Promjeni</button>
</>

    )
  }
}


function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <ClassKomponenta />

    </div>
  );
}

export default App;
