import './App.css';
import {useEffect, useState, useCallback} from 'react';

//F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn api key od NASA-e kaj je prof posudil

const API_KEY = 'F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn';

function App() {

  const [data,setData] = useState(null);

  //opcija3

  const url=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const getData= useCallback (async() => {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
  }, [url]);

  useEffect(()=>{

    //opcija1
      // fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      // .then(response=>response.json())
      // .then(responseData=>setData(responseData))

      //opcija zamjene .data s await...ispod

      //opcija2

      // const getData= async() => {
      //   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      //   const responseData = await response.json();
      //   setData(responseData);
      // }

      getData();

  }, [getData]);

//   if(!data){
//     return <p>Loading NASA data....</p>;
//   }

//   return (
//     <div className="App">
//         <h1>NASA Picture of the day</h1>
//         <h3>{data.title}</h3>
//         <img src={data.url} alt='nasa' />
//         <p>{data.explanation}</p>
//     </div>
//   );
// }

// return(
//   <div className="App">
//     {
//       !data ? <p>Loading NASA data....</p> :
//       (
//         <>
//             <h1>NASA Picture of the day</h1>
//             <h3>{data.title}</h3>                      2. verzija
//             <img src={data.url} alt='nasa' />
//             <p>{data.explanation}</p>
//         </>
//       )
//     }
//   </div>
// );}


//treća verzija
return(
  <div className="App">
    {!data && <p>Loading NASA data...</p>}
    {data && (<>
      <h1>NASA Picture of the day</h1>        
      <h3>{data.title}</h3>
      <img src={data.url} alt='nasa' />
      <p>{data.explanation}</p></>
    )}
</div>

)};

export default App;