import React, { useState } from "react";
import styles from "./ManagementCreateMenuPage.module.css";
import Category from "../../components/category/CategoryRoot";
import { Form, Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";

const ManagementCreateMenuPage = (props) => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    const formData = {
      menuName,
      price,
      description,
      image,
    };

    props.handleCreate(formData);
  };

  return (
    <div className="content">
      <div className={styles["menu-info"]}>
        <p>메뉴 정보</p>
      </div>
      <Form>
        <div className={styles.inputContent}>
          <div className={styles["category"]}>
            <Category />
          </div>
          <input
            className={styles["menu-input"]}
            placeholder="메뉴명"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
          />
          <input
            className={styles["menu-input"]}
            placeholder="가격(원)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className={styles["menu-input"]}>
            <Uploader
              listType="picture"
              action="//jsonplaceholder.typicode.com/posts/"
              onSuccess={(file) => setImage(file)}
            >
              <button>
                <CameraRetroIcon />
              </button>
            </Uploader>
          </div>
          <textarea
            className={styles["menu-textarea"]}
            placeholder="메뉴 설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles["save-button"]} onClick={handleSave}>
            <p>저장</p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ManagementCreateMenuPage;
