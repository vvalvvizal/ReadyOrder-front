import React, { useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Modal from "../../../../shared/modal/Modal";
import ManagementCreateMenuPage from "./ManagementCreateMenuPage";

const ManagementCreateMenuRoot = () => {
  let create_response = "";
  const location = useLocation();
  const { category } = location.state || {}; // 전달된 category 값 받기
  const [showModal, setShowModal] = useState(false);
  const viewModal = "failModal";
  const history = useHistory();
  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleCreate = async (body) => {
    console.log(body);

    try {
      const formData = new FormData();

      formData.append("title", body.title);
      formData.append("price", body.price);
      formData.append("tag", body.tag);

      formData.append("image", body.image);

      formData.append("creator", body.creator);
      formData.append("category", body.category);
      formData.append("available", body.available);

      const storedUserLoggedInData = JSON.parse(
        localStorage.getItem("userData")
      );

      await axios.post(`${process.env.REACT_APP_API_ROOT}/api/menus/`, formData, {
        headers: {
          Authorization: `Bearer ${storedUserLoggedInData.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("create ok");
      create_response = "success";
      history.go(-1);
    } catch (error) {
      console.log("Create Error", error);
      create_response = "fail";
      handleShow();
    }
  };

  return (
    <div>
      <Modal show={showModal} onClose={handleClose} viewModal={viewModal}>
        <div className="OrderModal">
          <p style={{ fontSize: "20px" }}>다시 시도해주세요.</p>
        </div>
      </Modal>
      <ManagementCreateMenuPage
        onSave={handleCreate}
        response={create_response}
        initialCategory={category}
      />
    </div>
  );
};

export default ManagementCreateMenuRoot;
