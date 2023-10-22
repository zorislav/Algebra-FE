import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error('No such user!');
  }

  throw new Error('Ooops, Server error!');
}

class App extends React.Component {
  input = ""
  state = { user: null, repos: [] };

  handleInputChange = event => {
    this.input = event.target.value;
  }
  
  getuser(username)
  {
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then(response => resolveResponse(response));
  }

  getrepos(username)
  {
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then(response => resolveResponse(response));
  }

  setUser(username) {
    Promise.all([
      this.getuser(username),
      this.getrepos(username)
    ])
    .then(([user, repos]) => this.setState({ user, repos }))
    .catch(error => alert(error));
  }

  handleResetUser = () => {
    this.setUser(this.input)
  }

  render_user(user){
    if (!user || !user.user)
    {
      return null;
    }

    const { avatar_url, bio, name, location } = user.user;
    
    return (
      <div>
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <p>{bio}</p>
      </div>
    );
  }

  render_repos({repos})
  {
    if (!repos || repos.length <= 0) {
      return null;
    }
  
    return (
      <div>
        <p><strong>REPOSITORIES: </strong></p>
        <ListGroup>
          {repos.map(repo => (
            <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }

  render()
  {
    const { user, repos } = this.state;

    return (<div>
      <input onChange={this.handleInputChange}></input>
      <button onClick={this.handleResetUser}>src</button>

      <div>
        <this.render_user user={user}></this.render_user>
        <this.render_repos repos={repos}></this.render_repos>
      </div>
    </div>)
  }
}

export default App;
