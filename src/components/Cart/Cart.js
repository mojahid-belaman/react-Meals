import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useRequest from "../../hooks/use-Request";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const { loading, error, fetchData } = useRequest();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className="mb-10 max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary">
      {cartCtx.items?.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const checkoutHandler = () => {
    setIsCheckout(true);
  };
  const funcManupData = (data) => {
    console.log(data);
  };
  const submitHandler = async (userInfo) => {
    fetchData(
      {
        url: "https://meal-http-fdda1-default-rtdb.firebaseio.com/ordered.json",
        method: "POST",
        body: JSON.stringify({
          user: userInfo,
          orderedItems: cartCtx.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      funcManupData
    );
    setIsSubmit(true);
    cartCtx.clearItem();
  };

  const styleBtnCancel =
    "px-8 py-1 bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full";
  const styleBtnOrder =
    "px-8 py-1 text-white border border-primary rounded-full";

  const contentButton = (
    <div className="space-x-4 text-right">
      <Button className={styleBtnCancel} onClick={props.onClose}>
        Close
      </Button>
      {hasItems && (
        <Button className={styleBtnOrder} onClick={checkoutHandler}>
          Order
        </Button>
      )}
    </div>
  );

  let content = (
    <>
      {cartCtx.items.length > 0 && cartItems}
      <div className="flex justify-between text-2xl font-bold mb-5">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitHandler} onClose={props.onClose} />
      )}
      {!isCheckout && contentButton}
    </>
  );
  if (isSubmit) {
    content = (
      <>
        <h1 className="text-primary mb-5">Data Save Successfully.</h1>
        <Button
          className={styleBtnOrder + ` flex ml-auto`}
          onClick={props.onClose}
        >
          Cancel
        </Button>
      </>
    );
  }
  if (loading) {
    content = <h1>Loading...</h1>;
  }
  if (error) {
    content = (
      <>
        <h1 className="text-red-600">{error}</h1>
        <Button
          className={styleBtnOrder + ` flex ml-auto`}
          onClick={props.onClose}
        >
          Cancel
        </Button>
      </>
    );
  }
  return <Modal onClose={props.onClose}>{content}</Modal>;
};

export default Cart;
