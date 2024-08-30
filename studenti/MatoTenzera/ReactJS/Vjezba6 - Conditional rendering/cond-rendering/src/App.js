import React from 'react';
import './App.css';

function ConditionalRendering(props){

const text = props.number === 1 && <h3>ivan</h3>;

const {number} = props;



  return (
    <>
    <h2>Number?</h2>
    {!number && <h3>nema imena</h3>}
    {text}
    {props.number === 2 && <h3>luka</h3>}
    {number === 3 && <h3>marko</h3>}
    <p>{props.number}</p>
    </>
    
  )

}

function MojaKomponenta(){

  const [isLoading, setLoading]= useState(false);
  const [data, setData]= useState("pozdrav svima");
  const [err, setErr] = useState(false);

  

  if(isLoading) return <p>loading...</p>
  if(data) return <p>{data}</p>
  if(err) return <p>{err}</p>

}

class App extends React.Component {

  constructor(){
    super();
    this.state={number:null}
  }

  handleButtonClick(number) {
    this.setState((currState) => { 
      return {
        number: number
      };
    });
  };


  render(){
  return (
    <div className="App">
      <h1>Hello</h1>
      <ConditionalRendering number={this.state.number} />
      <button onClick={()=>this.handleButtonClick(1)}>1</button>
      <button onClick={()=>this.handleButtonClick(2)}>2</button>
      <button onClick={()=>this.handleButtonClick(3)}>3</button>
      <MojaKomponenta />

    </div>
  );
}
}

export default App;
