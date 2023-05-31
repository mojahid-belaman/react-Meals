import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between text-2xl font-bold mb-5">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="space-x-4 text-right">
        <Button
          className={
            "px-8 py-1 bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full"
          }
          onClick={props.onClose}
        >
          Close
        </Button>
        <Button className={"px-8 py-1 text-white border border-primary rounded-full"}>
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
