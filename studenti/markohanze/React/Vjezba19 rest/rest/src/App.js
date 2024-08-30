import { useEffect, useState } from 'react';
import './App.css';

const NASA_API_KEY = 'F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn';

function App() {

  const [data, setData] = useState();

  useEffect(() => {

    fetch( `https://api.nasa.gov/planetary/apod?api_key=&{NASA_API_KEY}`)
.then(response => response.json())
.then(responseData => setData(responseData));
  }, []);

  if(!data){

    return(
<div className="App">
 <p>Loading NASA data...</p>;
</div>
      
    );
  }



  return (
    <div className="App">
     <h1>NASA picture of the day</h1>
     <h3>{data.title}</h3>
     <img src={data.url} alt="slika" width={500} />
     <p>{data.explanation}</p>
    </div>
  );
}

export default App;
