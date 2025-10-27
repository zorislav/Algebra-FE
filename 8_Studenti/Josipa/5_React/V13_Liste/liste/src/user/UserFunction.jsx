export default function UserFunction({ ime, years, onNameChange }) {
  //const {ime, years} = props;

  return (
    <>
      <p>
        Pozdrav, moje ime je {ime} i imam {years} godina.
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}
