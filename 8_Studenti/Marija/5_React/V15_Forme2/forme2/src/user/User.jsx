export default function User({ ime, years, onNameChange, onDeleteUser }) {
  //const { ime, years } = props;

  return (
    <>
      <p>
        Pozdrav, moje ime je {ime} i imam {years} godina.
      </p>
      <input type="text" value={ime} onChange={onNameChange}></input>
      <br />
      <button onClick={onDeleteUser}>Obriši</button>
    </>
  );
}
