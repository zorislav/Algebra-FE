import { useState, useEffect } from "react";
import "./App.css";

const API_KEY = "O7pnDBjjvI3cv0H4QNShXmbqNqOS8PPCJnhuuokK";

function App() {
  const [data, setData] = useState(null);

  async function getData() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    const responseData = await response.json();

    //console.log(responseData);
    setData(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  // setData

  if (!data) {
    return (
      <div className="App">
        <p>Loading NASA data...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
