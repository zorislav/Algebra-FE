import './App.css';
import{Routes,Route, Link, useNavigate} from 'react-router-dom';

function Index (){

  return(
    <>
      <h1>Welcome to router!</h1>
      <p>Ovo je primjer korištenja React Router-a!</p>
      <p>Sad smo na početnoj stranici.</p>
    </>
  )
}


function Komponenta1 (){

  return(
    <>
      <h1>Welcome to router!</h1>
      <p>Ovo je primjer korištenja React Router-a!</p>
      <p>Sad smo na Komponenti1.</p>
    </>
  )
}

function Komponenta2 (){

  return(
    <>
      <h1>Welcome to router!</h1>
      <p>Ovo je primjer korištenja React Router-a!</p>
      <p>Sad smo na Komponenti2.</p>
    </>
  )
}


 


function App() {

  const navigate=useNavigate();
  const clickHandler = ()=>{
    navigate('/komponenta2')
  }
 


  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/komponenta1'>Komponenta1</Link></li>
          <li><Link to='/komponenta2'>Komponenta2</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/Komponenta' element={<Komponenta1 />}/>
          <Route path='/Komponenta1' element={<Komponenta1 />}/>
          <Route path='/Komponenta2' element={<Komponenta2 />}/>
        </Routes>
        <button onClick={clickHandler}>Promjeni stranicu</button>
    </div>
  );
}

export default App;
