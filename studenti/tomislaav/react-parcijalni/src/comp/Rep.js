import {useState} from "react";
import propTypes from "prop-types";


function Rep(props){
    const [data,setData]=useState(null);
    const user =props.userNick;

    fetch('https://api.github.com/users/'+ user + '/repos')
    .then(response =>response.json())
    .then(data=>setData(data))
    .catch(error=>console.error(error));

    if(!data){
        return <h3>Loading data</h3>;
    }

    return (
        <div>
            <p><strong>REPOSITORIES:</strong></p>
            {data.map(data => {
                return (
                    <li>{data.name}</li>
                )
            })}
        </div>
    )
}


Rep.propTypes ={
    userNick: propTypes.string
}
export default Rep; 