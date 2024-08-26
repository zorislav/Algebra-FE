import PropTypes from 'prop-types';

function UserChildren({ ime, godine, children}) {

  return (
    <>
      <p>Pozdrav, moje ime je {ime} i imam {godine} godina.</p>
      <p>A hobi mi je {children}</p>
    </>
  );
}

export default UserChildren;

UserChildren.prototypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
  fontSize: PropTypes.string
};
