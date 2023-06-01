import React, { useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const amountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5) 
      return ;
    props.onAddMeal(amountNumber);
  }
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={"px-8 w-full text-white font-bold rounded-full"} type="submit">+ Add</Button>
    </form>
  );
};

export default MealsItemForm;
