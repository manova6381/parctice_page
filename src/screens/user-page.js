import React, { useState } from "react";
import InputComp from "../components/InputComp";

export default function LoggedPage() {
  const [textValue, setTextValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const getTargetValue = (e) => {
    setTextValue(e.target.value);
  };

  const submitValue = () => {
    console.log(textValue);
  };
  return (
    <div>
      <InputComp
        lable="Enter Your Username :"
        name="username"
        value={textValue.username}
        type="text"
        placeholder="enter a username"
        onChange={getTargetValue}
      />
      <InputComp
        lable="Enter Your Email :"
        name="email"
        value={textValue.email}
        type="text"
        placeholder="enter a email"
        onChange={getTargetValue}
      />
      <InputComp
        lable="Enter Your Password :"
        name="password"
        value={textValue.password}
        type="password"
        placeholder="enter a password"
        onChange={getTargetValue}
      />
      <InputComp
        lable="Enter Your Confirm Password :"
        name="confirm password"
        value={textValue.confirmPassword}
        type="password"
        placeholder="enter a confirm password"
        onChange={getTargetValue}
      />
      <button onClick={() => submitValue()}>submit</button>
    </div>
  );
}
