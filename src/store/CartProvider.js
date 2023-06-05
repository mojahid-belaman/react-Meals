import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const findExistItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existCart = state.items[findExistItem];
    let updateItems;
    if (existCart) {
      const updatedItem = {
        ...existCart,
        amount: existCart.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[findExistItem] = updatedItem;
    } else updateItems = state.items.concat(action.item);
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchFn] = useReducer(cartReducer, defaultCartState);
  const addItemHandler = (item) => {
    dispatchFn({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchFn({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
