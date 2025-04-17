const UserChildren = ({name, years, children}) => {

  // const {name, years} = props;

  return (
    <>
      <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
      <p>{children}</p>
    </>
  );
}

export default UserChildren;