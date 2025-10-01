import "./style.css";

function FunctionComponent1(props) {
  return (
    <p className="user-card-comp1">
      Ime: {props.ime}, Godine: {props.godine}
    </p>
  );
}

export default FunctionComponent1;
