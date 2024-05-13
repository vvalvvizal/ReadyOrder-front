import react, { useState, useEffect } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import "./Menu.css";
import ManagementMenuPage from "../../store/pages/management/ManagementMenuPage";

const MenuRoot = (props) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/menus/categories/6638862ce7596046ed2b4490"
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
      <div>
        <MenuList items={items} userType={props.userType} />
      </div>
    </>
  );
};
export default MenuRoot;
