import { useState } from "react";

function useInput(validInput) {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);

  const inputIsValid = validInput(value);
  const hasError = !inputIsValid && touch;

  const chanheHandler = (e) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setTouch(true);
  };

  const reset = () => {
    setValue("");
    setTouch(false);
  };
  return { value, inputIsValid, hasError, chanheHandler, blurHandler, reset };
}

export default useInput;
