import React from "react";
import styles from "./TextInputEmail.module.css";
const TextInputEmail = (props) => {
  return (
    <div className={styles.otpBox}>
      <input type="email" maxLength="20" className={styles.space} {...props} />
    </div>
  );
};

export default TextInputEmail;
