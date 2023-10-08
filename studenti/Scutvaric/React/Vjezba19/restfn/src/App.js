import { useState, useEffect, useCallback} from 'react';
import './App.css';

const API_KEY = 'F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn'

function App() {

  const [data, setData] = useState(null)

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const getData = useCallback (async() => {
      const response = await fetch(url)
      const responseData = await response.json();
      setData(responseData);
    }, [url]);

  useEffect(() => {

  // Opcija 1
  // fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  // .then (response => response.json())
  // .then(responseData => setData(responseData));

  // Opcija 2
  // const getData = async() => {
  //   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  //   const responseData = await response.json();
  //   setData(responseData);

  // }

  getData();

  }, [getData]);


  // Opcija 1 
  // if(!data) {
  //   return <p>Loading NASA data...</p>;
  // }

  // return (
  //   <div className="App">
  //     <h1>NASA picture of the day</h1>
  //     <h3>{data.title}</h3>
  //     <img src={data.url} alt={data.title} width={500} />
  //     <p>{data.explanation}</p>
  //   </div>
  // );

  return (
    <div className="App">
      {!data && <p>Loading NASA data...</p>}
      {data && (
        <>
            <h1>NASA picture of the day</h1>
       <h3>{data.title}</h3>
       <img src={data.url} alt={data.title} width={500} />
       <p>{data.explanation}</p>
        </>
      )}
    </div>
  )
}

export default App;