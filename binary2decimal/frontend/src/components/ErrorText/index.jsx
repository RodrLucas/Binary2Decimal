import React from "react";
import "./main.css";

export function ErrorText(props) {
  return <p id="error">{props.error}</p>;
}
