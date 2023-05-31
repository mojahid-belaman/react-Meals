import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button
      className="flex items-center space-x-2 md:space-x-4 bg-thirdly hover:bg-fourthly active:bg-fourthly text-white rounded-full px-5 md:px-10 py-3"
      onClick={props.onClick}
    >
      <span>
        <CartIcon />
      </span>
      <span className="hidden md:block">Your Cart</span>
      <span className="px-3 py-1 rounded-full bg-red-600 flex justify-center items-center">
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;
