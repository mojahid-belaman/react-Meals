import React from "react";

const MealSummary = () => {
  return (
    <section className="max-w-xl w-[90%] mx-auto -mt-28 mb-8 p-3 rounded-lg text-center text-white bg-secondary shadow-lg relative">
      <h1 className="m-0 mb-5 text-2xl font-bold">Delicious Food, Delivered To You</h1>
      <div className="text-sm [&>*:first-child]:mb-5">
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingrediants, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default MealSummary;
