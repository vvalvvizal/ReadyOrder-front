import React, { useEffect, useState } from "react";
import styles from "./PosPage.module.css";
import { ReactComponent as BackgroundSVG } from "./util/WoodBackground.svg";
import { ReactComponent as Close } from "./util/Close.svg";
import { ReactComponent as ButtonList } from "./util/ButtonList.svg";
import { ReactComponent as Home } from "./util/Home.svg";
import Modal from "../../shared/modal/Modal";
import axios from "axios";
import BillPaper from "./bill/BiilPaper";

const PosPage = () => {
  const Num = 6;
  const [tableBills, setTableBills] = useState(new Array(Num + 1));
  const [papers, setPapers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const viewModal = "billModal";
  const [selectedTable, setSelectedTable] = useState(null);

  const handleShow = (tableNumber) => {
    return () => {
      setSelectedTable(tableNumber + 1);
      setShowModal(true);
    };
  };
  const handleClose = () => {
    setSelectedTable(null); // 모달이 닫힐 때 선택한 테이블 초기화
    setShowModal(false);
  };

  const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.REACT_APP_API_ROOT}/api/orders/pos/${storedUserLoggedInData.userId}`
    );

    // SSE 이벤트 핸들러
    eventSource.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      if (data.message) {
      } else {
        console.log(data);
        setTableBills((prevBills) => {
          const updatedBills = [...prevBills];
          updatedBills[parseInt(data.tableNumber)] = data.bill.total;
          console.log(updatedBills);
          return updatedBills;
        });
      }
    };

    const tableBillsInit = async () => {
      let tableBills = new Array(Num + 1);
      let paper = new Array(Num + 1);
      for (var idx = 1; idx <= Num; idx++) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_ROOT}/api/orders/${idx}/bill`
          );
          paper[idx] = response.data;
          tableBills[idx] = response.data.total;
        } catch (error) {
          console.log(error);
        }
      }
      setTableBills(tableBills);
      setPapers(paper);
    };
    tableBillsInit();

    return () => {
      eventSource.close();
    };
  }, [storedUserLoggedInData.userId, showModal]);

  const tableReset = async () => {
    if (selectedTable !== null) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_ROOT}/api/orders/${selectedTable}`
        );
        const updatedTableBills = [...tableBills];
        updatedTableBills[selectedTable - 1] = response.data.total;
        setTableBills(updatedTableBills);
        console.log(`${selectedTable} 테이블 리셋 완료`);
      } catch (error) {
        console.log(error);
      }
    }

    setTableBills([...tableBills][selectedTable]=0)
    handleClose(); // 모달 닫기
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const todayDate = getTodayDate(); // 오늘 날짜 가져오기

  return (
    <div className={styles.content}>
      <div className={styles["pos-content"]}>
        <div className={styles["pos-header"]}>
          <h1>POS </h1>
          <div className={styles["pos-header-textbox"]}>
            <ul style={{ flexDirection: "column", marginRight: "120px" }}>
              <li>매장명 : 모닝건</li>
              <li>영업일자 : {todayDate}</li>
            </ul>
            <ul>
              <li>포스 ID : {storedUserLoggedInData.userId}</li>
            </ul>
          </div>

          <Close />
        </div>
        <div className={styles["pos-box"]}>
          <BackgroundSVG className={styles["pos-background"]}></BackgroundSVG>
          <div className={styles.buttonList}>
            <ButtonList />
          </div>
          <div className={styles.homeButton}>
            <Home />
          </div>
          <div className={styles["tableBox-container"]}>
            {Array.from({ length: Num }).map((_, index) => (
              <div
                key={index}
                className={styles.tableBox}
                onClick={handleShow(index)}
              >
                <p className={styles["tableNumber"]}>{index + 1}</p>
                <p className={styles["totalPrice"]}>
                  {tableBills[index + 1]}원
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={handleClose} viewModal={viewModal}>
        <div className="BillModal">
          <p style={{ fontSize: "18px" }}>테이블 영수증</p>
          <BillPaper
            tableNumber={selectedTable}
            paperInfo={papers[selectedTable]}
          />
          <div className={styles.resetbuttonContainer}>
            <div className={styles.resetbutton} onClick={tableReset}>
              계산완료
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PosPage;
