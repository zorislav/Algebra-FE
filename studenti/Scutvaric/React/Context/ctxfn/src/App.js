import React, { useState, useContext } from 'react';

import './App.css';

const MyContext = React.createContext({text: ''});

function Component1 () {

  const ctx = useContext(MyContext);

  return (
    <>
    <h2>Component 1 - Child of App</h2>
    <p>Component1: {ctx.text}</p>
    <Component2/>
    </>
  );
}

function Component2 () {

  return (
    <MyContext.Consumer>
      {(ctx) => {
        return (
          <>
          <h2>Component 2 - Child of Component1</h2>
          <p>Compontent2: {ctx.text} </p>
          </>
        );
      }
      }
    </MyContext.Consumer>
  );
}

function App() {

  const [inputText, setInputText] = useState('');

  const inputTextChangeHandler = (event) => {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <MyContext.Provider value={{text: inputText}}>
      <h1>Main Component - App</h1>
      <label>
        <input type="text" name="" value={inputText} onChange={inputTextChangeHandler} />
      </label>
      <Component1/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
