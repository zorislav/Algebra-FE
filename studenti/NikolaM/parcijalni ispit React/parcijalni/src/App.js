import React from 'react';
import { UserFormInput, ResponseForm } from './components/index.js';
import './App.css';

class App extends React.Component {
  state = {
    korisnik: null,
    repositorij: [],
    showResponseForm: false,
    showUserForm: true,
  };

  setUser = (unosKorisnika) => {
    fetch(`https://api.github.com/users/${unosKorisnika}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          korisnik: data,
          showResponseForm: true,
          showUserForm: false,
        });
      });

    fetch(`https://api.github.com/users/${unosKorisnika}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        this.setState({ repositorij: repositories });
      });
  };

  handleResetForm = () => {
    this.setState({ showUserForm: true, showResponseForm: false });
  };

  render() {
    const { korisnik, repositorij, showUserForm, showResponseForm } = this.state;

    return (
      <div className='App.css'>
        {showUserForm && <UserFormInput onFetchUserData={this.setUser} />}

        {showResponseForm && (
          <ResponseForm
            userData={korisnik}
            userRepos={repositorij}
            onResetForm={this.handleResetForm}
          />
        )}
      </div>
    );
  }
}

export default App;
