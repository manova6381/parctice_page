import React from "react";
import {NavLink} from "react-router-dom";

const SettingPage = () => {
    return(
        <div>
            <h2>This is Setting Page</h2>
            <NavLink to="login">goto login page</NavLink>
        </div>
    )
}

export default SettingPage;