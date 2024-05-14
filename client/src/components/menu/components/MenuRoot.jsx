import react, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import "./MenuRoot.css";

const MenuRoot = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/menus/6638862ce7596046ed2b4490"
        );
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  // const handleDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       "http://localhost:5000/api/menus/663a1d124fe67d153b29c8f4"
  //     );
  //     console.log(response.data);
  //     // 업데이트 콜백을 호출하여 부모 컴포넌트에 삭제된 아이템을 전달합니다.
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div>
      <MenuList items={items} userType={props.userType} />
    </div>
  );
};
export default MenuRoot;
