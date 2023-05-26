import React from "react";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  const { name, description, price } = props.meal;
  const newPrice = `$${price.toFixed(2)}`
  return (
    <li className="m-4 pb-4 last:pb-0 flex flex-col md:flex-row text-center md:text-left justify-between items-center border-b last:border-b-0 border-gray-300">
      <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <div className="italic text-sm">{description}</div>
        <div className="font-bold text-yellow-700">{newPrice}</div>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
