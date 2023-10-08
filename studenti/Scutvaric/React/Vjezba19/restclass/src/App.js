import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    title: null,
    url: null,
    explanation: null,
    isLoading: false
  };
  
  componentDidMount() {

    this.setState({...this.state, isLoading: true})

    fetch(`https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn`).then(response => response.json()).then(responseData => {
      this.setState({
        title: responseData.title, 
        url: responseData.url, 
        explanation: responseData.explanation,
        isLoading: false
      })
    } );
  }

 

  render() {
    return (
      <>
        { this.state.isLoading && <p>Loading NASA data...</p>}
        {!this.state.isLoading && 
        (
          <>
          <h1>NASA picture of the day</h1>
          <h3>{this.state.title}</h3>
          <img src={this.state.url} alt={this.state.title} width={500} />
          <p>{this.state.explanation}</p>
          </>
  
        )}
      </>
    );
  }

}

export default App;
