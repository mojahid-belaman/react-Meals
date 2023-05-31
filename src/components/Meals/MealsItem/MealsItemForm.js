import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  return (
    <form>
      <Input
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
      <Button className={"px-8 text-white font-bold rounded-full"}>+ Add</Button>
    </form>
  );
};

export default MealsItemForm;
