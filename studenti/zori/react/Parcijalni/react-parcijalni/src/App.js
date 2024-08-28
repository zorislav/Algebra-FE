import { useState } from "react";

import "./App.css";

import { UserForm, GithubUser, GithubRepos } from "./components";

function App() {
  const [user, setUser] = useState(null);

  function getData(userName) {
    // dohvat podataka

    console.log(userName);
    setUser(userName);
  }

  if (!user) {
    return (
      <div className="app">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="app">
      <GithubUser />
      <GithubRepos />
    </div>
  );
}

export default App;
