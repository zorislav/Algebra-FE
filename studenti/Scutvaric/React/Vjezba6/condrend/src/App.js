import LoadingSpinner from './Components/LoadingSpinner';
import MojaKomponenta from './Components/MojaKomponenta';
import './App.css';

function App() {

  const isLoading = true;

  const output = isLoading ? < LoadingSpinner /> : <MojaKomponenta/>

  return (
    <div className="App">
      {output}
      {isLoading && <LoadingSpinner/>}
      {!isLoading && <MojaKomponenta/>}
    </div>
  );
}

export default App;
