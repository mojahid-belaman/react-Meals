import React from "react";

const Card = (props) => {
  return <div className="bg-white p-4 rounded-lg">{props.children}</div>;
};

export default Card;
