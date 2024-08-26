import React from 'react'; //core
import ReactDOM from 'react-dom/client'; //osigurava interakciju sa dom browsera
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* root.render(  //ovdje render metoda iscrtava nasu applikaciju
  <React.StrictMode>
    <App />
  </React.StrictMode> //strictmode je nepotreban kao i reportwebvitals
); */

root.render(  

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
