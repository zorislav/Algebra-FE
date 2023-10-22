import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './index.css';

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <img src={user.avatar_url} alt="User Avatar" width="200px" height="200px"/>
        <h2>{user.name}</h2>
        <p>Lokacija: {user.location}</p>
        <p>Bio: {user.bio}</p>
        <h3>Repozitoriji:</h3>
        <ul>
          {user.repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    bio: PropTypes.string,
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleFetchUser = async () => {
    const { username } = this.state;
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const userData = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();

      const user = {
        avatar_url: userData.avatar_url,
        name: userData.name,
        location: userData.location,
        bio: userData.bio,
        repos: reposData,
      };

      this.setState({ user });
    } catch (error) {
      console.error(error);
      this.setState({ user: null });
    }
  };

  handleReset = () => {
    this.setState({ username: '', user: null });
  };

  render() {
    const { username, user } = this.state;

    return (
      <div className="App">
        <h2>GitHub username:</h2>
        {user ? (
          <div>
            <UserDetails user={user} />
            <Button variant='secondary' style={{ marginTop: '10px', marginBottom: '20px', width: '150px'  }} onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={this.handleUsernameChange}
            />
            <br />
            <Button type='submit' variant='secondary' style={{ marginTop: '10px', marginBottom: '20px', width: '150px' }} onClick={this.handleFetchUser}>GO!</Button>
          </div>
        )}
      </div>
    );
  }
}

export default App;