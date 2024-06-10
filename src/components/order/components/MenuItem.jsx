import React, { useState, useContext } from "react";
import styles from "./MenuItem.module.css"; // CSS 모듈 import
import { ReactComponent as AddCart } from "../util/icon/AddCart.svg";
import { NavLink, useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
const URLRoot = `${process.env.REACT_APP_API_ROOT}/api`;
const MenuItem = (props) => {
  // const { handleAddMenu } = useContext(CartContext);

  const { tableNum, uid } = useParams();
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
                  <>
                    <NavLink
                      className={styles["item-content"]}
                      to={{
                        pathname: `/${uid}/order/menu/${tableNum}/${item._id}`,
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
                          <p>{item.price.toLocaleString()}₩</p>
                        </div>
                      </div>
                      <div className={styles["item-img"]}>
                        <img src={URLRoot + item.image_url} alt={item.title} />
                      </div>
                    </NavLink>
                    {/* <div onClick={() => handleAddMenu(item._id)}>
                      <AddCart className={styles.addCartButton} />
                    </div> */}
                  </>
                ))
            )}
        </>
      )}
    </div>
  );
};

export default MenuItem;
