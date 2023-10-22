import { useState } from "react";
import pt from "prop-types";

function Repo(props){
    const [data, setData] = useState(null);
    const korisnik = props.korisnickoIme;
    
    fetch('https://api.github.com/users/' + korisnik + '/repos')
    .then(response => response.json())
    .then(data => setData(data))

    if(!data){
        return <h2>Loading repo data</h2>
    }
 
    return (
        <div className="repoData">
            <p><strong>REPOSITORIES:</strong></p>
            {data.map(data => {
                return (
                    <li>{data.name}</li>
                )
            })}
        </div>
    )
}

Repo.propTypes = {
    korisnickoIme: pt.string
}

export default Repo;