import './App.css';

function App({num}) {

  const listItems = num.map(broj => <li key={broj.toString()}>{broj}</li> )

  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
