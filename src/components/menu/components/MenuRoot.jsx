import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import Modal from "../../../shared/modal/Modal";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { checkdItemsContext } from "../../store/components/ManagementMenuItem";

const MenuRoot = (props) => {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const viewModal = "failModal";

  const { uid } = useParams();
  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const AdminfetchData = async () => {
    try {
      const storedUserLoggedInData = JSON.parse(
        localStorage.getItem("userData")
      );

      if (!storedUserLoggedInData || !storedUserLoggedInData.userId) {
        console.error("User data not found or userId is null");
        return;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_API_ROOT}/api/menus/${storedUserLoggedInData.userId}`
      );
      setItems(response.data);
    } catch (error) {
      console.error("Get Error", error);
    }
  };

  const UserfetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ROOT}/api/menus/${uid}`
      );
      setItems(response.data);
    } catch (error) {
      console.error("Get Error", error);
    }
  };

  useEffect(() => {
    if (props.userType === "customer") {
      UserfetchData();
    } else if (props.userType === "admin") {
      AdminfetchData();
    }
  }, [props.userType]);
  const handleDelete = async () => {
    try {
      const itemsToDelete = Object.keys(checkedItems).filter(
        (key) => checkedItems[key]
      );
      console.log("삭제할 항목:", itemsToDelete);

      // JWT 받아오기
      const storedUserLoggedInData = JSON.parse(
        localStorage.getItem("userData")
      );

      if (!storedUserLoggedInData || !storedUserLoggedInData.token) {
        throw new Error("사용자가 로그인되어 있지 않거나 토큰이 없습니다.");
      }

      // 순차적으로 삭제 요청 보내기
      for (const id of itemsToDelete) {
        try {
          const response = await axios.delete(
            `${process.env.REACT_APP_API_ROOT}/api/menus/${id}`,
            {
              headers: {
                Authorization: `Bearer ${storedUserLoggedInData.token}`,
              },
            }
          );
          console.log(`항목 ${id} 삭제 완료:`, response);
        } catch (error) {
          console.error(`항목 ${id} 삭제 오류:`, error);
          throw error; // 외부 catch로 에러 전달
        }
      }

      console.log("모든 항목이 성공적으로 삭제되었습니다.");

      // 삭제 후 다시 데이터 가져오기
      await AdminfetchData();
      await UserfetchData();
    } catch (error) {
      console.error("삭제 오류", error);
      handleShow();
    }
    setCheckedItems([])
  };

  return (
    <checkdItemsContext.Provider value={{ checkedItems, setCheckedItems }}>
      <Modal show={showModal} onClose={handleClose} viewModal={viewModal}>
        <div className="OrderModal">
          <p style={{ fontSize: "18px" }}>실패! 다시 시도해주세요</p>
        </div>
      </Modal>
      <div>
        <MenuList
          items={items}
          userType={props.userType}
          handleDelete={handleDelete}
        />
      </div>
    </checkdItemsContext.Provider>
  );
};

export default MenuRoot;
