import { useEffect, useState } from 'react';
import './App.css';

const NASA_API_KEY = 'F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn';

function App() {

  const [data, setData] = useState(null);

  async function getData() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {

    // fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    // .then(response => response.json())
    // .then(responseData => setData(responseData));

    // async function getData() {
    //   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    //   const responseData = await response.json();
    //   setData(responseData);
    // }

    getData();

  }, []);

  if(!data) {

    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );

  }

  return (
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt="Slika" width={500} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
