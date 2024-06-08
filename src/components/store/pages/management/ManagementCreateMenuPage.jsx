import React, { useState, useEffect } from "react";
import styles from "./ManagementCreateMenuPage.module.css";
import Category from "../../components/category/CategoryRoot";
import { Form, Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import Header from "../../../../shared/header/Header";
import ImageUpload from "../../../../shared/file/ImageUpload";
const ManagementCreateMenuPage = (props) => {
  const { onSave, initialCategory } = props;
  const [category, setCategory] = useState("");
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));

    const body = {
      title: menuName,
      price: parseInt(price, 10),
      image: image ? image : "https://picsum.photos/200",
      tag: description,
      creator: storedUserLoggedInData.userId,
      category: category ? category : initialCategory,
      available: true,
    };
    onSave(body);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const handleImageInput = (id, file, isValid) => {
    try {
      if (isValid) {
        console.log("Creating object URL for file:", file); // 파일 객체 출력
        setImage(file);
      } else {
        console.error("파일이 유효한 이미지가 아닙니다.");
      }
    } catch (error) {
      console.error("create object URL에 실패", error);
    }
  };

  const viewHeader = "create-menu";

  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className="content">
        <div className={styles["menu-info"]}>
          <p>메뉴 정보</p>
        </div>
        <Form>
          <div className={styles.inputContent}>
            <div className={styles["category"]}>
              <Category
                onCategoryChange={handleCategoryChange}
                initialCategory={initialCategory}
              />
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
            <div className={styles["menu-input-file"]}>
              <ImageUpload center id="image" onInput={handleImageInput} />
              {/* <Uploader
                listType="picture"
                action="//jsonplaceholder.typicode.com/posts/"
                onSuccess={(file) => setImage(file)}
              >
                <button>
                  <CameraRetroIcon />
                </button>
              </Uploader> */}
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
    </div>
  );
};

export default ManagementCreateMenuPage;
