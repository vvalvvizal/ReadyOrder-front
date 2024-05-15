import React, { createContext, useContext, useState, useEffect } from "react";
import styles from "./ManagementMenuItem.module.css"; // CSS 모듈 import
import Checkbox from "./checkbox/CheckBox";
// import { NavLink } from "react-router-dom";

export const checkdItemsContext = createContext({
  checkedItems: {},
  setCheckedItems: () => {},
});

const ManagementMenuItem = (props) => {
  // props.items 객체를 배열로 변환합니다.
  const categoryArray = Object.entries(props.items).map(
    ([category, items]) => ({
      category,
      items,
    })
  );

  // useContext를 통해 checkdItemsContext 사용
  const checkedItemsContext = useContext(checkdItemsContext);

  const [optionItems, setOptionItems] = useState({});

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    // itemId에 해당하는 아이템의 옵션을 업데이트합니다.
    setOptionItems((prevOptionItems) => ({
      ...prevOptionItems,
      [itemId]: value,
    }));
  };

  useEffect(() => {
    // 아이템이 삭제될 때마다 옵션 초기화
    setOptionItems({});
  }, [props.items]); // props.items가 변경될 때마다 실행

  return (
    <div>
      {categoryArray.map((categoryByItem) => (
        <div
          className={styles["categoryByItem-content"]}
          key={categoryByItem.category}
        >
          <p>{categoryByItem.category}</p>
          {categoryByItem.items.map((item) => (
            // <NavLink to="/item._id" className="store-button">
            <div className={styles["item-content"]} key={item._id}>
              <div className={styles["checkButton"]}>
                <Checkbox
                  // checkdItemsContext의 값에서 해당 아이템의 체크 여부를 가져옴
                  checked={checkedItemsContext[item._id]}
                  // checkdItemsContext의 값 업데이트 함수를 호출하여 체크 여부 변경
                  onClick={() =>
                    checkedItemsContext.setCheckedItems((prevCheckedItems) => ({
                      ...prevCheckedItems,
                      [item._id]: !prevCheckedItems[item._id],
                    }))
                  }
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
            // </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManagementMenuItem;
