import "/VSCODE_DEVELOPING/React/my_chat_app/src/css/login.css"

import React, { useState }  from "react";
import HeaderLogin from "./headerLogin";

function Login ({ loginFormSubmit }) {
    const [username, setUserName] = useState("");


const getUsername = (user) => {
    setUserName(user.target.value);
};

const submitForm = (user) => {
    user.preventDefault();
    loginFormSubmit(username);
}

return (
    <div className="login-form">
        <form className="reg-form" onSubmit={submitForm}>
        <HeaderLogin />
        <input
          className="login-form-input"
          type="text"
          placeholder="Upiši ime..."
          required
          onChange={getUsername}
        />
        <button className="reg-form-btn" type="submit">Klikni za ulaz u CHAT</button>
        </form>
    </div>
);
}

export default Login;