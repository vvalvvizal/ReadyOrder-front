import { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import "./Menu.css";

const MenuRoot = (props) => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/menus");
        console.log(response.data); // 받은 데이터 확인
        setItems(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MenuList items={items} />
    </div>
  );
};
export default MenuRoot;
