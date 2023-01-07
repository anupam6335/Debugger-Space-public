import React from "react";
import styles from "./TextInputOtp.module.css";
const TextInputOtp = (props) => {
  {
    console.log(props.value);
  }
//   return <input className={styles.input}  type="text" {...props} />
return(
    <>
        <div className={styles.otpBox}>
            {/* <input type="text" maxLength='1' {...props} />
            <input type="text" maxLength='1' {...props} /> */}
            <input type="text" maxLength='4' className={styles.space} {...props} />
            {/* <input type="text" maxLength='1' {...props} />
            <input type="text" maxLength='1' {...props} />
            <input type="text" maxLength='1' {...props} /> */}
        </div>
    </>
)
};

export default TextInputOtp;
