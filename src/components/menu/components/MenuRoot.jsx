import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import { checkdItemsContext } from "../../store/components/ManagementMenuItem";

const MenuRoot = (props) => {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/menus/${process.env.REACT_APP_USER_ID}`
      );
      setItems(response.data);
    } catch (error) {
      console.error("Get Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 의존성 배열로 사용하여 컴포넌트가 처음 렌더링될 때만 fetchData 함수가 실행되도록 함

  const handleDelete = async () => {
    try {
      const itemsToDelete = Object.keys(checkedItems).filter(
        (key) => checkedItems[key]
      );
      console.log(itemsToDelete);

      const deletePromises = itemsToDelete.map((id) =>
        axios.delete(`/api/menus/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        })
      );
      await Promise.all(deletePromises);
      console.log("delete ok");

      // 삭제 후 다시 데이터 가져오기
      fetchData();
    } catch (error) {
      console.error("Delete Error", error);
    }
  };

  return (
    <checkdItemsContext.Provider value={{ checkedItems, setCheckedItems }}>
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
