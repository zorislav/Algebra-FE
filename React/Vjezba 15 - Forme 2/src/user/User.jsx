function User({name, years, onNameChange, onDeleteUser}) {

  return (
    <>
      <p onClick={onDeleteUser}>Pozdrav, moje ime je {name} i imam {years} godina.</p>
      <input type="text" value={name} onChange={onNameChange} />
    </>
  );

}

export default User;