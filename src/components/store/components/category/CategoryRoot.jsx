import react, { useState, useEffect } from "react";
import axios from "axios";
import SelectButton from "./CategorySelectButton";

const CategoryRoot = ({ onCategoryChange, initialCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/menus/categories/${process.env.REACT_APP_USER_ID}`
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
    console.log(categories);
  }, [categories]);
  return (
    <SelectButton
      categories={categories}
      onCategoryChange={onCategoryChange}
      initialCategory={initialCategory}
    />
  );
};
export default CategoryRoot;
