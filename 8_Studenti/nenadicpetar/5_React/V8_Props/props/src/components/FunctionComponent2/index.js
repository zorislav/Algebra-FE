import "./style.css";

function FunctionComponent2(props) {
  return (
    <div className="user-container">
      <p>
        Ime: {props.ime}, Godine: {props.godine}
      </p>
      <div className="children-text">{props.children}</div>
    </div>
  );
}

export default FunctionComponent2;
