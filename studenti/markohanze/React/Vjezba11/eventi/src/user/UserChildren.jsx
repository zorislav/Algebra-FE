import { Children } from "react";

function UserChildren({ime, godine}) {

  return (
    <>
          <p>Pozdrav, moje ime je {ime} i imam {godine} godina. </p>
    {/* <p style={fontSize}>a hobi mi je { children }</p> */}
    </>
  );
};

export default UserChildren;