import React from "react";
import {NavLink} from "react-router-dom";

const RegisterPage = () => {
    return(
        <div>
            <h2>This is Register Page</h2>
            <NavLink to="home">goto home page</NavLink>
        </div>
    )
}

export default RegisterPage;