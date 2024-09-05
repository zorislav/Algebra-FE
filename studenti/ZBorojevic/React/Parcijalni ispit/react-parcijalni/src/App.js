import { useState } from "react";
import './App.css';
import { UserForm, GitHubUser, GitHubRepos } from './components';
import { githubapi } from "./services";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos ] = useState([])
  function getData(userName) {
    Promise.all([
      githubapi.fetchUser(userName), 
      githubapi.fetchUserRepos(userName)
    ]).then(([user, repos]) => {
      setUser(user)
      setRepos(repos)
    }).catch((error) => alert(error))

    // // Dohvat podataka
    // githubapi
    //   .fetchUser(userName)
    //   .then((user) => {
    //     const name = user.name
    //     githubapi.fetchUserRepos(name).then((repos) => {
    //     console.log(user)
    //     console.log(repos)
    //     setUser(user)
    //     setRepos(repos)
    //   })
    // }).catch((error) => {
    //     setUser(null)
    //     alert(error)
    //   })
    
  }

  function handleResetUser() {
    setUser(null)
  }

  if(!user) {
    return(
      <div className="app">
      <UserForm setUser={getData}/>
    </div>
    );
  }

  return (
    <div className="app">
      <GitHubUser user={user}/>
      <GitHubRepos repos={repos}/>
      <div style={styles.buttonContainer}>
        <button onClick={handleResetUser} style={styles.button}>Reset</button>
      </div>
    </div>
  );

}

export default App;

const styles = {
   buttonContainer: {
    textAlign: 'center'
   },
   button: {
    width: '100%',
    marginTop: 20
   }
}