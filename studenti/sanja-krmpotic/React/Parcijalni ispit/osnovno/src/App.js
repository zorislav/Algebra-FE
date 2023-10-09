import React from 'react';
import Button from 'react-bootstrap/Button';

import { UserForm, GithubUser, GithubRepos } from './components';
import { GithubApi } from './services';

import './App.css';

class App extends React.Component {

  state = { user: null, repos: [] };


  setUser = (userName) => {

    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchRepos(userName)
    ]).then(([user, repos]) => this.setState({user, repos})).catch(error => alert(error));

    // GithubApi.fetchUser(userName).then(user => {
    //   GithubApi.fetchRepos(userName).then(repos => this.setState({user, repos}));
    // });

  }

  handleResetUser = () => {
    this.setState({user: null})
  }

  render(){

    const { user, repos } = this.state;

    if(!user) {
      return (      
        <div className='App'>
          <UserForm setUser={this.setUser} />
        </div>
      )
    }


    return (
      <div className="App">
        <GithubUser user={user} />
        <GithubRepos repos={repos} />
        <Button type='submit' variant='secondary' size='lg' className='mt-5' onClick={this.handleResetUser}>Reset</Button>
      </div>
    );
  }
}

export default App;
