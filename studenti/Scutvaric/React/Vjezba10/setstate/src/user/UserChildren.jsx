function UserChildren({name, years, children}) {

    return (
      <>
        <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
        <p>{children}</p>
      </>
    );
  }
  
  export default UserChildren;