import { useState } from "react";
import pt from "prop-types";

function Main(props){
    const [data, setData] = useState(null);
    const korisnik = props.korisnickoIme;
    
    fetch('https://api.github.com/users/' + korisnik)
    .then(response => response.json())
    .then(data => setData(data))

    if(!data){
        return <h1>Loading main data</h1>
    }
     const podaci = {
        name: data.name,
        avatar: data.avatar_url,
        location: data.location,
        bio: data.bio
     }

     return (
        <div className="mainData">
            <img className="image" alt="avatar" src={podaci.avatar} />
            <p className="naslov">{podaci.name}</p>
            <p><strong>BIO: </strong>{podaci.bio}</p>
            <p><strong>LOCATION: </strong>{podaci.location}</p>
        </div>
     )

}

Main.propTypes = {
    korisnickoIme: pt.string
}

export default Main;