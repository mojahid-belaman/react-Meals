import React from "react";

const Input = (props) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      <label htmlFor={props.input.id} className="font-bold">{props.label}</label>
      <input className="pl-2 rounded-lg border border-gray-300 outline-none" {...props.input} />
    </div>
  );
};

export default Input;
