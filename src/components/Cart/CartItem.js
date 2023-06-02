import React from "react";
import Button from "../UI/Button";

const CartItem = (props) => {
  const { name, price, amount } = props.item;
  return (
    <li className="py-5 first:pt-0 border-b-4 border-b-primary flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold mb-3">{name}</h2>
        <div className="flex space-x-20 items-center text-lg">
          <span className="font-bold text-primary">{`$${price}`}</span>
          <span className="font-bold border border-gray-300 py-1 px-2 rounded-lg">x {amount}</span>
        </div>
      </div>
      <div className="mr-5">
        <Button className={'font-bold bg-transparent text-primary hover:text-white border border-primary py-0 px-5 mr-3 rounded-lg'}>-</Button>
        <Button className={'font-bold bg-transparent text-primary hover:text-white border border-primary py-0 px-5 rounded-lg'}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;
