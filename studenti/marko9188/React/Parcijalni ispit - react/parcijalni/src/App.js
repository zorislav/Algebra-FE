import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <img src={user.avatar_url} alt="User Avatar" />
        <h2>{user.name}</h2>
        <p>Location: {user.location}</p>
        <p>Bio: {user.bio}</p>
        <h3>Repositories:</h3>
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
        <h1>GitHub User Details</h1>
        {user ? (
          <div>
            <UserDetails user={user} />
            <button onClick={this.handleReset}>Reset</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={this.handleUsernameChange}
            />
            <button onClick={this.handleFetchUser}>Fetch User</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;