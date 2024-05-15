import React, { useState } from "react";
import styles from "./MenuItem.module.css"; // CSS 모듈 import

const MenuItem = (props) => {
  // props.items 객체를 배열로 변환합니다.
  const categoryArray = Object.entries(props.items).map(
    ([category, items]) => ({
      category,
      items,
    })
  );
  const [activeCategory, setActiveCategory] = useState(props.categories[0]);

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

      <div className={styles["items-content"]}>
        {activeCategory && (
          <>
            {categoryArray
              .filter((nowCategory) => nowCategory.category === activeCategory)
              .map((nowCategory) =>
                nowCategory.items.map((item) => (
                  <div className={styles["item-content"]} key={item.id}>
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
                    </div>
                  </div>
                ))
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
