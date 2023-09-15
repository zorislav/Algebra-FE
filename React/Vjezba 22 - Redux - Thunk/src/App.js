
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNasaData } from './store/redux-store';

function App() {

  const nasaData = useSelector(state => state.nasaData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNasaData());
  }, [dispatch]);

  if(!nasaData){
    return <p>Loading NASA data...</p>;
  }

  return (
    <>
      <h1>NASA picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500} />
      <p>{nasaData.explanation}</p>
    </>
  );
}

export default App;
