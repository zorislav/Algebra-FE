function UserFunction(props) {
  const { ime, godine } = props;
  return (
    <p>
      Pozdrav, moje ime je {ime} i imam {godine} godina.
    </p>
  );
}

export default UserFunction;
