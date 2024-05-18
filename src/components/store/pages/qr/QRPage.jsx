import React from "react";
import styles from "./QRPage.module.css";
import { ReactComponent as QRimg } from "./util/icon/QRimg.svg";
const QRPage = () => {
  return (
    <div className="content">
      <div className={styles.QRcontent}>
        <p className={styles.hi}>안녕하세요!</p>
        <div className={styles.text}>
          <p style={{ marginRight: "2px" }}> 주문을 위해 </p>
          <p style={{ color: "#f39800" }}>QR코드</p>
          <p>를 발급받으세요</p>
        </div>
        <div className={styles["makeQR-box"]}>
          <div className={styles.QRimg}>
            <QRimg />
          </div>
          <p>QR 코드 발급</p>
        </div>
      </div>
    </div>
  );
};
export default QRPage;
