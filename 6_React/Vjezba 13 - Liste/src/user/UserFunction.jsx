function UserFunction({name, years, onNameChange}) {

  return (
    <>
      <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
      <input type="text" value={name} onChange={onNameChange} />
    </>
  );

}

export default UserFunction;