import React, { useState, useEffect, useLayoutEffect } from 'react';

import './App.css';

function AppH () {

    const [repos, setRepos] = useState([]);

    useLayoutEffect(()=>{
        console.log('Component will mount!');
    }, []);

  useEffect(() => {
    console.log('Component did mount!');
    getList();
  }, []);

  const getList = () => {
    fetch ('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => {
      // console.log(this.repos);
      setRepos(data)
      });
  }

    return (
      <div className="App">
        <h3>Hello Mounting Lifecycle method</h3>
        { repos.map((repo,index) => (
          <div key={repo.id}>
            {index} : <strong>{repo.name}</strong>
          </div>
        ))}
      </div>
  );
}


export default AppH;
