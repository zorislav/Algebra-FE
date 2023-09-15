import React from 'react';
import Button from 'react-bootstrap/Button';

import { UserForm, GithubUser, GithubRepos } from './components';
import { GithubApi } from './services';

import './App.css';

class App extends React.Component {

  state = { user: null, repos: [] };

  setUser = userName => {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ])
    .then(([user, repos]) => this.setState({ user, repos }))
    .catch(error => alert(error));
  }

  handleResetUser = () => {
    this.setState({ user: null });
  }

  render(){

    const { user, repos } = this.state;

    if (!user) {
      return (
        <div className="app">
          <UserForm setUser={this.setUser} />
        </div>
      );
    }

    return (
      <div className="app">
        <GithubUser user={user}/>
        <GithubRepos repos={repos}/>
        <div className="d-grid gap-2">
          <Button 
            onClick={this.handleResetUser}
            type="submit"
            size="lg"
            variant="secondary"
            className="mt-5"
          >Reset</Button>  
        </div>

      </div>
    );
  }
}

export default App;

