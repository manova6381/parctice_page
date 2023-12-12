import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {NavLink} from "react-router-dom";

import LoginPage from "./screens/Login";
import RegisterPage from "./screens/Register";
import HomePage from "./screens/Home";
import SettingPage from "./screens/Setting";
import LandingPage from "./screens/landing-page";
import FormPage from "./screens/Form-page";
import TodoApplication from "./screens/todo-page";
import UserProfile from "./screens/user-profile";
import GetApiUser from "./screens/get-api";
import GetDataApi from "./screens/get-data-api";
import CrudOperation from "./screens/page-form";
import LoggedPage from "./screens/user-page";

function App() {
  return (
    <div>
      {/* <h1>This is Practice React</h1> */}
      {/* <NavLink to="login"> goto next login page</NavLink> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="home" element={<HomePage></HomePage>}></Route>
          <Route path="setting" element={<SettingPage></SettingPage>}></Route>
          <Route path="form" element={<FormPage></FormPage>}></Route>
          <Route
            path="todo"
            element={<TodoApplication></TodoApplication>}
          ></Route>
          <Route
            path="user-profile"
            element={<UserProfile></UserProfile>}
          ></Route>
          <Route path="get-api" element={<GetApiUser></GetApiUser>}></Route>
          <Route path="get-data" element={<GetDataApi></GetDataApi>}></Route>
          <Route path="crud" element={<CrudOperation />} />
          <Route path="log" element={<LoggedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
