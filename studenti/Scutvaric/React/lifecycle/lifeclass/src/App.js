import React from 'react';

import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }
  
  UNSAFE_componentWillMount() {
    console.log('Component will mount!');
  }

  componentDidMount() {
    console.log('Component did mount!');
    this.getList();
  }

  getList = () => {
    fetch ('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => {
      // console.log(this.repos);
      this.setState({repos: data})
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.repos !== nextState.repos;

  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
  }

  componentDidUpdate () {
    console.log('Component did update!');
  }

  render () {
    const { repos } = this.state;

    return (
      <div className="App">
        <h3>Hello Mounting Lifecycle method</h3>
        { repos.map((repo,index) => (
          <div key={repo.id}>
            {index} : <strong>{repo.name}</strong>
          </div>
        ))}
      </div>
  );
}
}

export default App;
