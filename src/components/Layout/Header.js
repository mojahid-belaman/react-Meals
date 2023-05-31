import React, { Fragment } from "react";
import meals from "../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="w-full h-16 px-2 py-10 md:px-10 bg-primary text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">ReactMeals</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className="h-100 overflow-hidden">
        <img
          src={meals}
          alt="Meals Order"
          className="w-full h-full object-cover [transform:rotateZ(-3deg)_translateY(-5rem)_translateX(0)_scale(1.1)]"
        />
      </div>
    </Fragment>
  );
};

export default Header;
