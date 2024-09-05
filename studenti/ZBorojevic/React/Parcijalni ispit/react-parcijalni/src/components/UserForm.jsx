import React from 'react'

class UserForm extends React.Component{
    state = { userName: "" }

    handleUserChange = (event) => {
        const userName = event.target.value
        this.setState({ userName })
    }
    handleUserSelected = (event) => {
        event.preventDefault()
        const { setUser } = this .props
        const { userName } = this.state

        setUser(userName)
        // 
    }

    render() {
        const { userName } = this.state

        return (
            <form onSubmit={this.handleUserSelected}>
                <div style={styles.cointainer}>
                    <label htmlFor="name" style={styles.label}>
                        GitHub username:
                    </label>
                    <input type="text" id="name" value={this.userName} onChange={this.handleUserChange} style={styles.input} />
                    <button type="submit" className="button">GO!</button>
                </div>
            </form>
        )
    }
}

export default UserForm

const styles = {
    container: {
        paddingLeft: 50,
        paddingRight: 50
    },
    label: {
        fontWeight: "bold",
        margitBottom: 15
    },
    input: {
        marginTop: 10,
        width: "100%",
        boxSizing: "border-box"
    }

}