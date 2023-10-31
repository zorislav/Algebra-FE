import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import  { connect } from 'react-redux';
import { UserForm, GithubUser, GithubRepos } from './components';
import { getRepos, RESET } from './store/redux-store';
import './App.css';

class App extends React.Component {

  setUser = userName => {

    const { onGetRepos } = this.props;
    onGetRepos(userName);

  }

  handleResetUser = () => {

    const { onReset } = this.props;
    onReset();

  }

  render(){

    const { user, repos } = this.props;

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

function mapStateToProps(state) {
  return {
    user: state.user,
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRepos: (userName) => dispatch(getRepos(userName)),
    onReset: () => dispatch({type: RESET}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  onGetRepos: PropTypes.func,
  onReset: PropTypes.func,
  user: PropTypes.object,
  repos: PropTypes.array
};