import React, { useState, useContext } from "react";
import styles from "./MenuItem.module.css"; // CSS 모듈 import
import { ReactComponent as AddCart } from "../util/icon/AddCart.svg";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const MenuItem = (props) => {
  // props.items 객체를 배열로 변환합니다.

  const { handleAddMenu } = useContext(CartContext);

  const categoryArray = Object.entries(props.items).map(
    ([category, items]) => ({
      category,
      items,
    })
  );

  const [activeCategory, setActiveCategory] = useState(props.categories[0]);
  const [cart, setCart] = useState({});

  const handleCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className={styles["category-content"]}>
        {props.categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategory(category)}
            className={activeCategory === category ? styles.active : ""}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>

      {activeCategory && (
        <>
          {categoryArray
            .filter((nowCategory) => nowCategory.category === activeCategory)
            .map((nowCategory) =>
              nowCategory.items
                .filter((item) => item.available)
                .map((item) => (
                  <NavLink
                    className={styles["item-content"]}
                    to={{
                      pathname: `/order/menu/${item._id}`,
                      state: { item },
                    }}
                    key={item._id}
                  >
                    <div className={styles["item-textbox"]}>
                      <div className={styles["item-title"]}>{item.title}</div>
                      <div className={styles["item-tag-box"]}>
                        <p>{item.tag}</p>
                      </div>
                      <div className={styles["item-price"]}>
                        <p>{item.price}₩</p>
                      </div>
                    </div>
                    <div className={styles["item-img"]}>
                      <img src={item.image_url} alt={item.title} />
                      <div onClick={() => handleAddMenu(item._id)}>
                        <AddCart className={styles.addCartButton} />
                      </div>
                    </div>
                  </NavLink>
                ))
            )}
        </>
      )}
    </div>
  );
};

export default MenuItem;
