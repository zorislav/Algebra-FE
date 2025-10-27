import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { SearchForm, UserCard, RepoList } from "./components";
import { GithubService } from "./services";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    userData: null,
    repos: [],
    error: "",
    loading: false,
  };

  handleSearch = async (username) => {
    this.setState({ loading: true, error: "", userData: null, repos: [] });
    try {
      const user = await GithubService.getUser(username);
      const repos = await GithubService.getRepos(username);
      this.setState({ userData: user, repos, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  handleReset = () => {
    this.setState({ username: "", userData: null, repos: [], error: "" });
  };

  render() {
    const { userData, repos, error, loading } = this.state;

    return (
      <Container className="app">
        <h1 className="mb-4 text-center">GitHub Explorer</h1>

        {!userData && (
          <SearchForm onSearch={this.handleSearch} disabled={loading} />
        )}

        {loading && <p>Učitavanje podataka...</p>}

        {error && <Alert variant="danger">{error}</Alert>}

        {userData && (
          <>
            <UserCard data={userData} />
            <RepoList items={repos} />
            <div className="text-center mt-4">
              <Button onClick={this.handleReset} variant="secondary">
                Reset
              </Button>
            </div>
          </>
        )}
      </Container>
    );
  }
}

export default App;
