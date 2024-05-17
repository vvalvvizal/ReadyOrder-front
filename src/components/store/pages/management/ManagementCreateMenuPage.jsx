import React, { useState } from "react";
import styles from "./ManagementCreateMenuPage.module.css";
import Category from "../../components/category/CategoryRoot";
import { Form, Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";

const ManagementCreateMenuPage = (props) => {
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
          <input className={styles["menu-input"]} placeholder="메뉴명"></input>
          <input
            className={styles["menu-input"]}
            placeholder="가격(원)"
          ></input>

          <div className={styles["menu-input"]}>
            <Uploader
              listType="picture"
              action="//jsonplaceholder.typicode.com/posts/"
            >
              <button>
                <CameraRetroIcon />
              </button>
            </Uploader>
          </div>

          <textarea
            className={styles["menu-textarea"]}
            placeholder="메뉴 설명"
          ></textarea>

          <div className={styles["save-button"]} onClick={props.handleCreate}>
            <p>저장</p>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default ManagementCreateMenuPage;
