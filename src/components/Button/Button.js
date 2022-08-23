import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <button
      className={`btn ${props.className} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
}
export const OutlineButton = (props) => {
  return (
    <button
      className={`btn-outline ${props.small ? "small" : null}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};
export default Button;
