import React from "react";
import styles from "./TextInputPhone.module.css";
const TextInputPhone = (props) => {
return(
    <>
        <div className={styles.otpBox}>
            <input type="number" maxLength='10' className={styles.space} {...props} />
        </div>
    </>
)
};

export default TextInputPhone;
