import React from "react";

const Button = (props) => {
  return (
    <button className={`bg-primary hover:bg-thirdly text-white py-2 ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
