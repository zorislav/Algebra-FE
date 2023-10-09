import React from 'react';
import Button from 'react-bootstrap/Button';
import { Unos } from './components';
import { PodaciKorisnika, Repozitoriji } from './components';
import './App.css';

class App extends React.Component {

  state = { user: null, repos: [] };

  resolveResponse(response) {
    if (response.status === 200) {
      return response.json();
    }
  
    if (response.status === 400) {
      return new Error('No such user!');
    }
    return new Error('Something went wrong');
  }

  fetchUser(userName) {
    const url = `https://api.github.com/users/${userName}`;
    return fetch(url).then(response => this.resolveResponse(response));
  }

  fetchRepos(userName) {
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url).then(response => this.resolveResponse(response));
  }

  setUser = (userName) => {

    Promise.all([
      this.fetchUser(userName),
      this.fetchRepos(userName)
    ]).then(([user, repos]) => this.setState({user, repos}))
      .catch(error => alert(error));
    
    // this.fetchUser(userName).then(user => {
    //   this.fetchRepos(userName).then(repos => this.setState({user, repos}));
    // });
  }

  handleResetUser = (event) => {
    this.setState({user: null});
  }
  render() {
    const { user, repos } = this.state;

    if(!user) {
      return (
      <div  className="App">
        <Unos setUser={this.setUser}/>
      </div>
      )
    }
    return (
      <div className="App">
        
       <PodaciKorisnika user={user} />
       <Repozitoriji repos={repos}/>
       <Button type='submit' size='lg' className='mt-5' onClick={this.handleResetUser}>RESET</Button>
          
      </div>
    );
  }
}

export default App;
