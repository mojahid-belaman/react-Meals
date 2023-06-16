import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
import { useEffect, useState } from "react";

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const res = await fetch(
        "https://meal-http-fdda1-default-rtdb.firebaseio.com/meals.json"
      );
      if (!res.ok) {
        throw new Error("Somthing Went Wrong!");
      }
      const data = await res.json();
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
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

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
  if (isLoading) {
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
