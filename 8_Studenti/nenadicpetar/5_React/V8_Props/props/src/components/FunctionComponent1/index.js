import "./style.css";

function FunctionComponent1(props) {
  return (
    <p className="user-text">
      Ime: {props.ime}, Godine: {props.godine}
    </p>
  );
}

export default FunctionComponent1;
