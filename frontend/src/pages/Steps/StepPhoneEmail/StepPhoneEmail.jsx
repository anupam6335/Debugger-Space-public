import React, { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';

import style from "./StepPhoneEmail.module.css";
import styles from "../../Home/Home.module.css";
const phoneEmailMap = {
    phone: Phone,
    email: Email,
};

let bg;

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];
  bg = type === "phone" ? "call" : "email";
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <img
            src={`/assets/${bg}.svg`}
            alt="podcast image"
            draggable="false"
          />
        </div>
        <div className={styles.right}>
          <div>
            <div className={style.buttonWrap}>
              <button
                className={`${style.tabButton} ${
                  type === "phone" ? style.active : ""
                }`}
                onClick={() => setType("phone")}
              >
                <img src="/assets/phone-white.png" alt="phone img" />
              </button>
              <button
                className={`${style.tabButton} ${
                  type === "email" ? style.active : ""
                }`}
                onClick={() => setType("email")}
              >
                <img src="/assets/mail-white.png" alt="email img" />
              </button>
            </div>
            <Component onNext={onNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
