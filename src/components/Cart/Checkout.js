import Button from "../UI/Button";
import useInput from "../../hooks/use-Input";

const isEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    chanheHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isEmpty);
  const {
    value: enteredStreet,
    inputIsValid: streetIsValid,
    hasError: streetHasError,
    chanheHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isEmpty);
  const {
    value: enteredPostalCode,
    inputIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    chanheHandler: postalCodeChangeHandler,
    blurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput(isFiveChars);
  const {
    value: enteredCity,
    inputIsValid: cityIsValid,
    hasError: cityHasError,
    chanheHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
    resetName();
    resetStreet();
    resetPostalCode();
    resetCity();
  };

  const styleBtnCancel =
    "px-8 py-1 bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full";
  const styleBtnConfirm =
    "px-8 py-1 text-white border border-primary rounded-full";
  const styleLabel = `font-bold text-gray-600 block mb-3`;
  const styleInput = "p-1 border rounded-md border-gray-300 w-full";

  return (
    <form onSubmit={confirmHandler} className="max-h-64">
      <div className="flex space-x-5">
        <div className="mb-3 flex-1">
          <label htmlFor="name" className={styleLabel}>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className={`${styleInput} ${
              nameHasError
                ? " outline-none border border-red-600 bg-red-200"
                : ""
            }`}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="text-red-600">Please Enter Valid Name.</p>
          )}
        </div>
        <div className="mb-3 flex-1">
          <label htmlFor="street" className={styleLabel}>
            Street
          </label>
          <input
            type="text"
            name="street"
            placeholder="Enter Your Street"
            className={`${styleInput} ${
              streetHasError
                ? " outline-none border border-red-600 bg-red-200"
                : ""
            }`}
            value={enteredStreet}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          />
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="mb-3 flex-1">
          <label htmlFor="postal" className={styleLabel}>
            Code Postal
          </label>
          <input
            type="text"
            name="postal"
            placeholder="Enter Your Code-Postal"
            className={`${styleInput} ${
              postalCodeHasError
                ? " outline-none border border-red-600 bg-red-200"
                : ""
            }`}
            value={enteredPostalCode}
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
          />
        </div>
        <div className="mb-3 flex-1">
          <label htmlFor="city" className={styleLabel}>
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter Your City"
            className={`${styleInput} ${
              cityHasError
                ? " outline-none border border-red-600 bg-red-200"
                : ""
            }`}
            value={enteredCity}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
        </div>
      </div>
      <div className="flex space-x-5 justify-end mt-5">
        <Button className={styleBtnCancel} onClick={props.onClose}>
          Cancel
        </Button>
        <Button
          className={`${styleBtnConfirm} ${
            !formIsValid
              ? " bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
              : " "
          }`}
          type={"submit"}
          disabled={!formIsValid}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
