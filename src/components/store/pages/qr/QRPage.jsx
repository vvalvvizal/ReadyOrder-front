import React, { useState, useEffect } from "react";
import styles from "./QRPage.module.css";
import Modal from "../../../../shared/modal/Modal";
import { ReactComponent as QRimg } from "./util/icon/QRimg.svg";
import { ReactComponent as Logo } from "./util/icon/ReadyOrder.svg";
import { ReactComponent as ExclamationMark } from "./util/icon/ExclamationMark.svg";
import QRCode from "qrcode";

const QRPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState(0);
  const [qrCodeData, setQrCodeData] = useState("");
  const viewModal = "QRCode";
  const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));

  const handleClick = () => {
    setNum((prevNum) => (prevNum % 6) + 1);
    handleShow();
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      QRCode.toString(
        `${process.env.REACT_APP_API_ROOT}/${storedUserLoggedInData.userId}/order/menu/${num}`,
        {
          errorCorrectionLevel: "H",
          type: "svg",
        },
        (err, data) => {
          if (err) throw err;

          setQrCodeData(data);
          console.log(qrCodeData);
        }
      );
    }
  }, [showModal, num, storedUserLoggedInData.userId]);

  return (
    <div className={styles.content}>
      <div className={styles.QRcontent}>
        <p className={styles.hi}>안녕하세요!</p>
        <div className={styles.text}>
          <p style={{ marginRight: "2px" }}> 주문을 위해 </p>
          <p style={{ color: "#f39800" }}>QR코드</p>
          <p>를 발급받으세요</p>
        </div>
        <div className={styles["makeQR-box"]} onClick={handleClick}>
          <div className={styles.QRimg}>
            <QRimg />
          </div>
          <p>QR 코드 발급</p>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <Modal show={showModal} onClose={handleClose} viewModal={viewModal}>
        <div className={styles.modalContent}>
          <div className={styles.QRtext}>
            <h4>{num}번</h4>
            <p>테이블로 가세요</p>
            <div className={styles.ExclamationMark}>
              <ExclamationMark />
            </div>
          </div>
          <div className={styles.QRCode}>
            <img
              alt={`${num}`}
              src={`data:image/svg+xml;base64,${btoa(qrCodeData)}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QRPage;
