import './App.css';
import MojaKomponenta from './components/MojaKomponenta';
import LoadingSpinner from './components/LoadingSpinner';

function App() {

  const isLoading = true;

  const output = isLoading ? <LoadingSpinner /> : <MojaKomponenta />

  return (
    <div className="App">
      {output}
      {isLoading && <LoadingSpinner />}
      {!isLoading && <MojaKomponenta />}
    </div>
  );
}

export default App;
