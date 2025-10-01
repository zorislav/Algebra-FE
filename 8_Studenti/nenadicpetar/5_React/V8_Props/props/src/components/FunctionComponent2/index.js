import "./style.css";

function FunctionComponent2(props) {
  return (
    <div className="user-card-comp2">
      <p>
        Ime: {props.ime}, Godine: {props.godine}
      </p>
      <div className="children-text">{props.children}</div>
    </div>
  );
}

export default FunctionComponent2;
