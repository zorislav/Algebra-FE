import React from "react";

const UserCard = React.memo(
  ({ korisnik, promijeniIme, povecajGodine, flashClass, tooltip }) => {
    return (
      <div className={`user-card fade-in ${flashClass}`}>
        <div className="tooltip">
          <p>
            {korisnik.ime} ({korisnik.godine} godina)
          </p>
          {tooltip && <span className="tooltip-text show">{tooltip}</span>}
        </div>
        <input
          type="text"
          value={korisnik.ime}
          onChange={(e) => promijeniIme(korisnik.id, e.target.value)}
        />
        <button onClick={() => povecajGodine(korisnik.id)}>+1 godina</button>
      </div>
    );
  }
);

export default UserCard;
