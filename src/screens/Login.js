import React from "react";
import {NavLink} from "react-router-dom";

import "../css/login.css";

const LoginPage = () => {

    const welcomeMessage = () =>{
        alert("Welcome to React");
    }

    const message = "this is a Message variable";

    const captureEvent = (event) =>{
        console.log(event)
    }
    return(
        <div>
            <h2 className="heading">This is Login Page</h2>
            <h3>{message}</h3>
            <NavLink to="register"> goto Register Page</NavLink>
            <button onClick={() => welcomeMessage()}>print Message</button>
            <br></br>
            <label>Enter a Message</label>
            <input type="text" placeholder="Enter a Message" onChange={captureEvent}></input>
        </div>
    )
}

export default LoginPage;