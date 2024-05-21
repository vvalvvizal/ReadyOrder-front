import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import styles from "./ManagementMenuItem.module.css"; // CSS 모듈 import
import Checkbox from "./checkbox/CheckBox";
import Divider from "../../../shared/Divider/Divider";
import { NavLink } from "react-router-dom";
import { ReactComponent as MenuAddPlus } from "../../store/util/icon/MenuAddPlus.svg";

export const checkdItemsContext = createContext({
  checkedItems: {},
  setCheckedItems: () => {},
});

const ManagementMenuItem = (props) => {
  const { selectedCategory, handleCreate } = props;

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

  const categoryRefs = useRef({});

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    // itemId에 해당하는 아이템의 옵션을 업데이트합니다.
    setOptionItems((prevOptionItems) => ({
      ...prevOptionItems,
      [itemId]: value, //지금 변경된 아이템 아이디 값만 수정
    }));

    updateItemAvailability(itemId, value === "판매중"); //선택된 value가 "판매중"이면 true, 아니면 false
  };

  const updateItemAvailability = async (itemId, available) => {
    try {
      const response = await fetch(`/api/menus/${itemId}/available`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify({ available }), // Stringify the body
      });
      if (!response.ok) {
        throw new Error("put error");
      }
      const data = await response.json();
      console.log("아이템 업데이트 성공:", data);
    } catch (error) {
      console.error("아이템 업데이트 실패:", error);
    }
  };

  useEffect(() => {
    // 아이템이 삭제될 때마다 옵션 초기화
    setOptionItems({});
  }, [props.items]); // props.items가 변경될 때마다 실행

  useEffect(() => {
    if (selectedCategory && categoryRefs.current[selectedCategory]) {
      //선택된 카테고리와 같은 카테고리이름을 찾아서
      categoryRefs.current[selectedCategory].scrollIntoView({
        // 해당 요소가 현재 뷰포트에 보이도록 스크롤
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedCategory]);

  return (
    <div>
      {categoryArray.map((categoryByItem) => (
        <div key={categoryByItem.category}>
          <div
            className={styles["categoryByItem-content"]}
            //ref : DOM 요소 참조를 얻을 수 있는 속성
            ref={(el) => (categoryRefs.current[categoryByItem.category] = el)}
            //categoryRefs.current에 각 카테고리 이름을 키로하고, 해당 DOM 요소를 값으로 가지는 객체 저장.
          >
            <p>{categoryByItem.category}</p>
            <Divider />
            {categoryByItem.items.map((item) => (
              <div className={styles["item-content"]} key={item._id}>
                <div className={styles["checkButton"]}>
                  <Checkbox
                    // checkdItemsContext의 값에서 해당 아이템의 체크 여부를 가져옴
                    checked={checkedItemsContext[item._id]}
                    // checkdItemsContext의 값 업데이트 함수를 호출하여 체크 여부 변경
                    onClick={() =>
                      checkedItemsContext.setCheckedItems(
                        (prevCheckedItems) => ({
                          ...prevCheckedItems,
                          [item._id]: !prevCheckedItems[item._id],
                        })
                      )
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
                    value={
                      optionItems[item._id] ||
                      (item.available === true ? "판매중" : "일시품절")
                    }
                    onChange={(event) => handleOptionChange(event, item._id)}
                  >
                    <option value="판매중">판매중</option>
                    <option value="일시품절">일시품절</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          <NavLink
            to={{
              pathname: "/store/menu/create",
              state: { category: categoryByItem.category },
            }}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.addMenu} onClick={handleCreate}>
              <MenuAddPlus />
              <p>메뉴 추가</p>
            </div>
          </NavLink>

          <Divider />
        </div>
      ))}
    </div>
  );
};

export default ManagementMenuItem;
