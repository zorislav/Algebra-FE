import React from "react";

class App2 extends React.Component {
  state = {
    title: null,
    url: null,
    explanation: null,
    isFetching: false,
  };

  render() {
    const { title, url, explanation, isFetching } = this.state;

    if (isFetching) {
      return (
        <div className="App">
          <p>Loading...</p>{" "}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>NASA Picture off the Day</h1>
        <h3>{title}</h3>
        <img src={url} alt="Slika" width={500} />
        <p>{explanation}</p>
      </div>
    );
  }

  componentDidMount() {
    const NASA_API_KEY = "vqWIcuTz01esFefypG6CfngHLWub7RpGY71qf28M";

    this.setState({ ...this.state, isFetching: true });

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then((response) => response.json())
      .then((responseData) =>
        this.setState({
          title: responseData.title,
          url: responseData.url,
          explanation: responseData.explanation,
          isFetching: false,
        })
      );
  }
}
export default App2;
