import React from "react";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h2>This is Home Page</h2>
            <NavLink to="setting">goto setting page</NavLink>
        </div>
    )
}

export default HomePage;