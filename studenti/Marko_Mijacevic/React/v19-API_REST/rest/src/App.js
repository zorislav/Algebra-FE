
import {useEffect, useState} from 'react';
import './App.css';

const NASA_API_KEY = 'klqQrH6OO3xJGNrtVnbs96flclhdc2s0Jpd5n3OO';

function App() {

  const [data, setData] = useState(null);

  async function getData(){     //nacin 3
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {

    // fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    // .then(response => response.json())
    // .then(responseData => setData(responseData));    //nacin 1

    // async function getData(){
    //   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    //   const responseData = await response.json();
    //   setData(responseData);     //nacin 2
    // }

    getData();

  }, []);
  
  if(!data){  //za čekanje dohvaćanja podataka
    return(
      <div className="App">
        <p>Loading NASA data...</p>
      </div>
    )
  }

  return (  //nakon pristizanja podataka
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt="Slika" width={500} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
