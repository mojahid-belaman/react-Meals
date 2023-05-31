import React from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsAvailable = () => {
  const listMeals = DUMMY_MEALS.map((meal) => <MealsItem key={meal.id} meal={meal} />);
  return (
    <section className="max-w-4xl w-[90%] mx-auto animate-meal">
      <Card>
        <ul>{listMeals}</ul>
      </Card>
    </section>
  )
};

export default MealsAvailable;
