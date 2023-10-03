import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getNasaData } from './store/redux-store';

import './App.css';

function App() {
  const nasaPodaci =useSelector(state=>state.nasaData);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getNasaData())
  }, [dispatch]);

  return (
    <div className="App">
      {!nasaPodaci.title && <p>loading</p>}
      {nasaPodaci.title && (
        <>
          <h1>NASA Picture of the day</h1>
          <h3>{nasaPodaci.title}</h3>
          <img src={nasaPodaci.url} alt="slika" width={600}/>
          <p>{nasaPodaci.explanation}</p>
        </>
      )}
        
    </div>
  );
}

export default App;
