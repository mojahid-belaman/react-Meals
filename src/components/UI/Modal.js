import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = () => {
  return <div className="fixed left-0 top-0 z-40 w-full h-full bg-black/80" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="max-w-2xl w-[80%] mx-auto bg-white rounded-lg p-5 fixed z-50 left-1/2 top-1/4 -translate-x-1/2">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
