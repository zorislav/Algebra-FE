import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    userData: null,
    repos: [],
    loading: false,
    error: null,
  };

  handleSearch = async (username) => {
    this.setState({ loading: true, error: null, userData: null, repos: [] });

    try {
      // 1️⃣ Dohvati podatke o korisniku
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userResponse.ok) throw new Error("Korisnik nije pronađen!");
      const userData = await userResponse.json();

      // 2️⃣ Dohvati repozitorije
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!reposResponse.ok)
        throw new Error("Greška pri dohvaćanju repozitorija!");
      const reposData = await reposResponse.json();

      // 3️⃣ Spremi sve u state
      this.setState({
        username,
        userData,
        repos: reposData,
        loading: false,
      });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  handleReset = () => {
    this.setState({
      username: "",
      userData: null,
      repos: [],
      loading: false,
      error: null,
    });
  };

  render() {
    const { userData, repos, loading, error } = this.state;

    return (
      <div className="container mt-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">GitHub User Viewer</h1>
          <p className="text-muted">
            Pretraži GitHub korisnike i njihove repozitorije
          </p>
        </div>

        <SearchForm onSearch={this.handleSearch} onReset={this.handleReset} />

        {loading && (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Učitavanje...</span>
            </div>
            <p className="text-muted mt-2">Dohvaćam podatke s GitHub-a...</p>
          </div>
        )}

        {error && <p className="text-danger text-center mt-4">{error}</p>}

        {userData && (
          <div className="user-section mt-5 fade-in">
            <UserProfile user={userData} />
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="repos-section mt-4 fade-in">
            <RepoList repos={repos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
