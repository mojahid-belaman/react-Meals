import React from "react";
import Button from "../UI/Button";

const confirmHandler = (event) => {
  event.preventDefault();
};

const styleBtnCancel =
  "px-8 py-1 bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full";
const styleBtnConfirm =
  "px-8 py-1 text-white border border-primary rounded-full";
const styleLabel = "font-bold block mb-3";
const styleInput = "border border-gray-300 w-full";
const Checkout = (props) => {
  return (
    <form onSubmit={confirmHandler} className="max-h-64">
      <div className="flex space-x-5">
        <div className="mb-3 flex-1">
          <label htmlFor="name" className={styleLabel}>
            Your Name
          </label>
          <input type="text" name="name" className={styleInput} />
        </div>
        <div className="mb-3 flex-1">
          <label htmlFor="street" className={styleLabel}>
            Street
          </label>
          <input type="text" name="street" className={styleInput} />
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="mb-3 flex-1">
          <label htmlFor="postal" className={styleLabel}>
            Code Postal
          </label>
          <input type="text" name="postal" className={styleInput} />
        </div>
        <div className="mb-3 flex-1">
          <label htmlFor="city" className={styleLabel}>
            City
          </label>
          <input type="text" name="city" className={styleInput} />
        </div>
      </div>
      <div className="flex space-x-5 justify-end mt-5">
        <Button className={styleBtnCancel} onClick={props.onClose}>
          Cancel
        </Button>
        <Button className={styleBtnConfirm} type={"submit"}>
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
