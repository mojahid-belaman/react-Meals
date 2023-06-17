import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-primary hover:bg-thirdly ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
