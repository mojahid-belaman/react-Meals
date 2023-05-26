import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MealsItemForm = () => {
  return (
    <form>
      <Input
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={"px-8 font-bold rounded-full"}>+ Add</Button>
    </form>
  );
};

export default MealsItemForm;
