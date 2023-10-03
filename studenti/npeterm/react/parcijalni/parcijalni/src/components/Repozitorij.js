import { useState } from "react";
import propTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup';


function Repozitorij(props){
    const [data,setData]=useState(null);
    const user =props.userNick;

    fetch('https://api.github.com/users/'+ user + '/repos')
    .then(response =>response.json())
    //.then(data=> console.log(data))
    .then(data=>setData(data))
    .catch(error=>console.error(error));

    if(!data){
        return null;
    }

    return(

      <div className="repoz">
      <p><strong>REPOSITORIES: </strong></p>
      <ListGroup>
        {data.map(data => (
          <ListGroup.Item key={data.id}>{data.name}</ListGroup.Item>
          
        ))}
      </ListGroup>
    </div>
    )
}


Repozitorij.propTypes ={
    userNick: propTypes.string
}
export default Repozitorij;