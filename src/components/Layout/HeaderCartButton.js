import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [animate, setAnimate] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx
  const totalAmount = items.reduce((accum, curr) => {
    return accum + curr.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0)
      return;
    setAnimate(true)

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button
      className={`flex items-center space-x-2 md:space-x-4 bg-thirdly hover:bg-fourthly active:bg-fourthly text-white rounded-full px-5 md:px-10 py-3 ${animate ? 'animate-bump' : ''}`}
      onClick={props.onClick}
    >
      <span>
        <CartIcon />
      </span>
      <span className="hidden md:block">Your Cart</span>
      <span className="px-3 py-1 rounded-full bg-red-600 flex justify-center items-center">
        {totalAmount}
      </span>
    </button>
  );
};

export default HeaderCartButton;
