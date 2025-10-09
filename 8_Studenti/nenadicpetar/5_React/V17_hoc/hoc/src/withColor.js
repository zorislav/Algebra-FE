import React from "react";

function withColor(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: props.color,
      };
    }

    handleClick = () => {
      // Promijeni boju nasumično pri svakom kliku
      const colors = ["red", "green", "blue", "orange", "purple", "pink"];
      let newColor;
      do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      } while (newColor === this.state.color); // da ne ostane ista
      this.setState({ color: newColor });
    };

    render() {
      const style = {
        backgroundColor: this.state.color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "16px",
      };

      return (
        <WrappedComponent
          {...this.props}
          style={style}
          onClick={this.handleClick}
        />
      );
    }
  };
}

export default withColor;
