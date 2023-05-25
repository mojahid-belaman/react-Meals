import React, { Fragment } from "react";
import meals from "../asset/meals.jpg"

const Header = () => {
  return (
    <Fragment>
      <header className="w-full h-16 px-10 bg-primary text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className="h-96 overflow-hidden">
        <img src={meals} alt="Meals Order" className="w-full h-full object-cover [transform:rotateZ(-5deg)_translateY(-4rem)_translateX(-1rem)_scale(1.1)]" />
      </div>
    </Fragment>
  );
};

export default Header;
