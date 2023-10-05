import React from "react";
import Main from "./Main";
import Repozitorij from "./Repozitorij";

class Forma extends React.Component{

         state={
    userNick:"",
    catchData:false,
    invalidInput:false
   };
    
 

onSearchChange=(event)=>{
    const searchValue=event.target.value;
    this.setState({userNick:searchValue});
};
deletion=()=>{
    window.location.reload(false);
}
handleSubmit=(event)=>{
    event.preventDefault();
    const  name=this.state.userNick;

    if(name){
        this.setState({
            catchData:true,
            invalidInput:false
        });
    }else{
        this.setState({invalidInput:true});
    }
};
render(){
    if(!this.state.catchData){
        return(
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>username:</label>
                <input className="input" type="text" placeholder="e.g.facebook" onChange={this.onSearchChange}/>
                <br></br>
                {this.state.invalidInout&&(
                    <p>Error:Input valid username</p>
                )}
                <br>
                </br>
                <input className="button" type="submit" value="Search"></input>
                </form>
            </div>
        );
    }else{
        return(
            <div>
        <Main userNick={this.state.userNick}></Main>
        <Repozitorij userNick={this.state.userNick}></Repozitorij>
        <button className="dbutton" onClick={this.deletion}>Reset</button>
        </div>
        );
    }
}
}
export default Forma;