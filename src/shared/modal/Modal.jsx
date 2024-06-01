import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, viewModal, children }) => {
  if (!show) return null;
  // console.log(viewModal);
  let modalClass;
  let closeButtonClass = styles.closeButton;
  switch (viewModal) {
    case "failModal":
      modalClass = styles.failModal;
      break;
    case "successOrder":
      modalClass = styles.successModal;
      closeButtonClass = styles.successCloseButton;
      break;
    default:
      modalClass = styles.modal;
      break;
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={modalClass}>
        <button className={closeButtonClass} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
