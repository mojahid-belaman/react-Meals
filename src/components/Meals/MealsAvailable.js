import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
import useRequest from "../../hooks/use-Request";

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const { loading, error, fetchData } = useRequest();
  
  const manipulateDAta = (data) => {
    const arrData = [];
    for (const key in data) {
      arrData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(arrData);
  };


  useEffect(() => {
    fetchData(
      {url: "https://meal-http-fdda1-default-rtdb.firebaseio.com/meals.json"},
      manipulateDAta
    );
  }, [fetchData]);

  let content = <p>No Found Meals!</p>;
  if (meals.length > 0) {
    content = (
      <ul>
        {meals.map((meal) => (
          <MealsItem key={meal.id} meal={meal} />
        ))}
      </ul>
    );
  }
  if (loading) {
    content = <p>LOADING...</p>;
  }
  if (error) {
    content = <p className="text-center text-red-600">{error}</p>;
  }
  return (
    <section className="max-w-4xl w-[90%] mx-auto animate-meal">
      <Card>{content}</Card>
    </section>
  );
};

export default MealsAvailable;
