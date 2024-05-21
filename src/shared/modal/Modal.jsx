import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, viewModal, children }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div
        className={viewModal === "failModal" ? styles.failModal : styles.modal}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
