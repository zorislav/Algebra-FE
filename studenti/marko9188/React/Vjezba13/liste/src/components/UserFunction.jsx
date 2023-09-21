function UserFunction(props) {

    return (
      <>
        <p>Pozdrav, moje ime je {props.name} i imam {props.years} godina.</p>
        <input type="text" value={props.name} onChange={props.onNameChange}/>
      </>
  
    );
  }
  
  export default UserFunction;