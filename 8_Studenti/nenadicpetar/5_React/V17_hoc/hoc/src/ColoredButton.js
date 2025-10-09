import React from "react";
import withColor from "./withColor";

// Osnovna komponenta — običan gumb
function Button(props) {
  return <button style={props.style}>{props.children}</button>;
}

// Povezujemo komponentu Button s HOC-om withColor
const ColoredButton = withColor(Button);

export default ColoredButton;
