import React from "react";
import styles from "./Card.module.css";
const Card = ( {title, icon, children} ) => {
  return (
    <div className={styles.right}>
      <div className={styles.headingWrapper}>
       { icon && <img src={`/assets/${icon}.png`} className={`${icon == 'logo' ? styles.logos : ''}`} alt="Debugger Space Logo"/>}
        { title && <h1 className={styles.heading}>{title}</h1> }
      </div>
      {
        children
      }
    </div>
  );
};

export default Card;
