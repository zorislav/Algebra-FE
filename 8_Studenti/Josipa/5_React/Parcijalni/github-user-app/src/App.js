import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { SearchForm, UserCard, RepoList } from "./components";
import { getRepos, RESET } from "./store/redux-store";
import "./App.css";

class App extends React.Component {
  handleSearch = (userName) => {
    this.props.getRepos(userName);
  };

  handleReset = () => {
    this.props.reset();
  };

  render() {
    const { user, repos } = this.props;

    if (!user)
      return (
        <div className="app">
          <SearchForm onSearch={this.handleSearch} />
        </div>
      );

    return (
      <div className="app">
        <UserCard user={user} />
        <RepoList repos={repos} />
        <div className="d-grid gap-2 mt-3">
          <Button onClick={this.handleReset} variant="secondary" size="lg">
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  getRepos: (userName) => dispatch(getRepos(userName)),
  reset: () => dispatch({ type: RESET }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
