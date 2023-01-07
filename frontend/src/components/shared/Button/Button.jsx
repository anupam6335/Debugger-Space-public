import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn} role="button">
      <span className={styles.btn82Shadow}></span>
      <span className={styles.btn82edge}></span>
      <span className={`${styles.btn82Front} ${styles.text}`}>{text}</span>
      {/* <img className={styles.arrow} src="/assets/arrow-forward.png" alt="" /> */}
    </button>
  );
};

export default Button;
