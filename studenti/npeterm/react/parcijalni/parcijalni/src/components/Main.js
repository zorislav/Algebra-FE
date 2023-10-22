import {useState} from "react";
import propTypes from "prop-types";

function Main(props){
    const [data, setData]=useState(null);
    const user =props.userNick;

    fetch('https://api.github.com/users/'+ user)
    .then(response =>response.json())
    //.then(data=> console.log(data))
    .then(data=>setData(data))
    .catch(error=>console.error(error));

    if(!data){
        return <h1>Loading data</h1>

    }
    const all_data={
        name:data.name,
        avatar:data.avatar_url,
        location:data.location,
        bio:data.bio
    }

    return (
        <div className="md">
        <img className="pic" src={all_data.avatar} alt="avatar" width={90} height={90}/>
        <p>name:{all_data.name}</p>
        <p>bio:{all_data.bio}</p>
        <p>location:{all_data.location}</p>
        

        </div>
    )
}
Main.propTypes ={
    userNick: propTypes.string
}

export default Main;