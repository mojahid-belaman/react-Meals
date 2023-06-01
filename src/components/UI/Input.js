import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      <label htmlFor={props.input.id} className="font-bold flex-1">
        {props.label}
      </label>
      <input
        ref={ref}
        className="pl-2 max-w-[50px] rounded-lg border border-gray-300 outline-none"
        {...props.input}
      />
    </div>
  );
});

export default Input;
