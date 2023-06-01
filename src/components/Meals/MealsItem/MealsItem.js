import React, { useContext } from "react";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { id, name, description, price } = props.meal;
  const newPrice = `$${price.toFixed(2)}`;
  const addMealHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };
  return (
    <li className="m-4 pb-4 last:pb-0 flex flex-col md:flex-row text-center md:text-left justify-between items-center border-b last:border-b-0 border-gray-300">
      <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <div className="italic text-sm">{description}</div>
        <div className="font-bold text-yellow-700">{newPrice}</div>
      </div>
      <div>
        <MealsItemForm id={id} onAddMeal={addMealHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
