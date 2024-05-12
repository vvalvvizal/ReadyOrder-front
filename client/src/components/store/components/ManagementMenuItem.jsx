import React, { useState } from "react";
import styles from "./ManagementMenuItem.module.css"; // CSS 모듈 import
import Checkbox from "../util/button/CheckBox";

const ManagementMenuItem = (props) => {
  // props.items 객체를 배열로 변환합니다.
  const categoryArray = Object.entries(props.items).map(
    ([category, items]) => ({
      category,
      items,
    })
  );

  const [checkedItems, setCheckedItems] = useState({});
  const [optionItems, setOptionItems] = useState({});
  const handleCheck = (itemId) => {
    // 클릭된 아이템의 체크 상태를 반전시킵니다.
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    // itemId에 해당하는 아이템의 옵션을 업데이트합니다.
    setOptionItems((prevOptionItems) => ({
      ...prevOptionItems,
      [itemId]: value,
    }));
  };

  return (
    <div>
      {categoryArray.map((categoryByItem) => (
        <div
          className={styles["categoryByItem-content"]}
          key={categoryByItem.category}
        >
          <p>{categoryByItem.category}</p>
          {categoryByItem.items.map((item) => (
            <div className={styles["item-content"]} key={item._id}>
              <div className={styles["checkButton"]}>
                <Checkbox
                  checked={checkedItems[item._id]}
                  onClick={handleCheck}
                  itemId={item._id}
                />
              </div>
              <div className={styles["item-img"]}>
                <img src={item.image_url} alt={item.title} />
              </div>
              <div className={styles["item-textbox"]}>
                <div className={styles["item-title"]}>{item.title}</div>
              </div>
              <div className={styles["soldButton"]}>
                <select
                  value={optionItems[item._id] || "판매중"}
                  onChange={(event) => handleOptionChange(event, item._id)}
                >
                  <option value="판매중">판매중</option>
                  <option value="일시품절">일시품절</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManagementMenuItem;
