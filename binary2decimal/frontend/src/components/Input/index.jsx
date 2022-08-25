import React from "react";
import "./main.css";

export function Input(props) {
  return <input onChange={props.onChange} type={props.type} />;
}
