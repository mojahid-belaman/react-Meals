import React from "react";

const Button = (props) => {
  return (
    <button className={`bg-primary hover:bg-thirdly py-2 ${props.className}`} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
