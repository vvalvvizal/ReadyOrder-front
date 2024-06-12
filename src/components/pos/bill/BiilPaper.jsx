import React from "react";
import styles from "./BillPaper.module.css";

const BillPaper = (props) => {
  const { tableNumber, paperInfo } = props;
  const { detail, total } = paperInfo;

  return (
    <div className={styles.receipt}>
      <div className={styles.center}>
        <p>[ 중간계산서 ]</p>
      </div>

      <table className={styles.details} cellSpacing="0">
        <thead>
          <tr>
            <th>메뉴</th>
            <th>단가</th>
            <th>수량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((foodInfo, idx) => (
            <tr key={idx}>
              <td>{foodInfo[0]}</td>
              <td>{foodInfo[1]}</td>
              <td>{foodInfo[2]}</td>
              <td>{foodInfo[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.separator}></div>

      <table className={styles.totals}>
        <tbody>
          <tr>
            <th>합 계 :</th>
            <td>{total}원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillPaper;
