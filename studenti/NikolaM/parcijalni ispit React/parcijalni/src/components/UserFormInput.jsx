import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserFormInput({ onFetchUserData }) {
  const [unosKorisnika, setunosKorisnika] = useState('');

  const uneseniInputKorisnika = (event) => {
    setunosKorisnika(event.target.value);
  };

  const Dohvatpodataka = (event) => {
    event.preventDefault()
    onFetchUserData(unosKorisnika);
  };

  return (
    <form className="form">
      <h3>GitHub username:</h3>
      <input type="text" placeholder="e.g. facebook" value={unosKorisnika} onChange={uneseniInputKorisnika} />
      <br />
      <button type="button" onClick={Dohvatpodataka} className='button1'>GO!</button>
    </form>
  );
}

UserFormInput.propTypes = {
    onFetchUserData: PropTypes.func.isRequired, 
  };

export default UserFormInput;
