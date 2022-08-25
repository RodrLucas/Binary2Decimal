import React from "react";
import './main.css'

export function Button(props) {
  return (
    <button type={props.type}>
      {props.text}
    </button>
  );
}
