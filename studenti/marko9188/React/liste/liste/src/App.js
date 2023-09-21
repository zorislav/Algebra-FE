import logo from './logo.svg';
import './App.css';

function App({num}) {

  const listitems = num.map(broj => <li key={broj.toString()}>{broj}</li>) //key se piše zbog crvenog upozorenja u consoli u pregledniku

  return (
    <div >
      <ul>{listitems}</ul>
    </div>
  );
}

export default App;
