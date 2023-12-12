import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <NavLink to="login">goto Login page</NavLink>
      <br />
      <NavLink to="register">goto Register page</NavLink>
      <br />
      <NavLink to="home">goto Home page</NavLink>
      <br />
      <NavLink to="setting">goto Setting page</NavLink>
      <br />
      <NavLink to="form">goto form page</NavLink>
      <br />
      <NavLink to="todo">goto form Todo Application</NavLink>
      <br />
      <NavLink to="user-profile">goto form User Profile</NavLink>
      <br />
      <NavLink to="get-api">goto form Get API User</NavLink>
      <br />
      <NavLink to="get-data">goto form Get Data API</NavLink>
      <br />
      <NavLink to="crud">goto form Crud Operation</NavLink>
      <br />
      <NavLink to="log">goto form Logged Page</NavLink>
    </div>
  );
};

export default LandingPage;
