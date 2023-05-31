import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="flex justify-between text-2xl font-bold mb-5">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="space-x-4 text-right">
        <Button
          className={
            "px-8 py-1 bg-white hover:text-white hover:bg-primary text-primary border border-primary rounded-full"
          }
        >
          Close
        </Button>
        <Button className={"px-8 py-1 border border-primary rounded-full"}>
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
