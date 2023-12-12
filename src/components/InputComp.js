import React from "react";

export default function InputComp(props) {
  console.log(props, "props");
  return (
    <div className="space">
      <label className="label">{props.label}</label>
      <input
        label={props.label}
        name={props.name}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
