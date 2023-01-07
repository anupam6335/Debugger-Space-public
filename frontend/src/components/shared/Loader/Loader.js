import React from "react";
import styles from "./Loader.module.css";
import Card from "../Card/Card";
const Loader = ({ message }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src="/assets/waiting.svg" alt="waiting image" draggable="false" />
      </div>

      <Card>
        <svg
            className={styles.spinner}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 300"
        >
          <polygon
            className={`${styles.turn01} ${styles.darkestTulip}`}
            points="400, 280, 310, 150, 400, 20, 490, 150"
          />
          <polygon
            className={`${styles.turn02} ${styles.darkestTulip}`}
            points="400, 280, 310, 150, 400, 20, 490, 150"
          />
          <polygon
            className={`${styles.turn03} ${styles.tulip}`}
            points="400, 280, 310, 150, 400, 20, 490, 150"
          />
          <polygon
            className={`${styles.turn04} ${styles.paleTulip}`}
            points="400, 280, 310, 150, 400, 20, 490, 150"
          />
          <polygon
            className={`${styles.turn05} ${styles.palestTulip}`}
            points="400, 280, 310, 150, 400, 20, 490, 150"
          />
        </svg>
        <span className={styles.message}>{message}</span>
      </Card>
    </div>
  );
};

export default Loader;



