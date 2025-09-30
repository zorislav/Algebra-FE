import "./style.css";

function FunctionComponent1(props) {
  return (
    <p className="user-card-comp1">
      <p>Ime: {props.ime}</p>
      <p>Godine: {props.godine}</p>
    </p>
  );
}

export default FunctionComponent1;
