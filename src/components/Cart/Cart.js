import React, { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className="mb-10 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary">
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} item={item}/>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between text-2xl font-bold mb-5">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
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
        {hasItems && (
          <Button
            className={
              "px-8 py-1 text-white border border-primary rounded-full"
            }
          >
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
