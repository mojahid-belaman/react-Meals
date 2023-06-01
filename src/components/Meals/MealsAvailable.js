import React from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
import { DUMMY_MEALS } from "../../dummyData/meals";

const MealsAvailable = () => {
  const listMeals = DUMMY_MEALS.map((meal) => (
    <MealsItem key={meal.id} meal={meal} />
  ));
  return (
    <section className="max-w-4xl w-[90%] mx-auto animate-meal">
      <Card>
        <ul>{listMeals}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
