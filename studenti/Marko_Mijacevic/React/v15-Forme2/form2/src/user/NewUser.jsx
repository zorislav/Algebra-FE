
import React from "react";


class NewUser extends React.Component{
    state = {
        name: '',
        age: 0
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangeHandler = (event) => {
        this.setState({ age: +event.target.value });
    }

    userSubmitHandler = (event) => {
        event.preventDefault();

        const { onAddUser } = this.props;
        const { name, age } = this.state;

        if(name && age){
            onAddUser({name, age})
            this.setState({ name: '', age: 0 });
        }
    }


    render(){

        const { name, age} = this.state;

        return(
            <form onSubmit={this.userSubmitHandler}>
                <label>
                    Ime:
                    <input
                        type="text"
                        value={name}
                        onChange={this.nameChangeHandler}
                    />
                </label>
                <label>
                    Godine:
                    <input
                        type="number"
                        value={age}
                        onChange={this.ageChangeHandler}
                    />
                </label>
                <button>Pošalji</button>
            </form>
        )
    }
}

export default NewUser;