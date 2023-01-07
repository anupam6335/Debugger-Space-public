import React from "react";
import { useState } from "react";
import StepName from "../Steps/StepName/StepName";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import styles from "../Home/Home.module.css";

const steps = {
  1: StepName,
  2: StepAvatar,
};
let bg;
const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  bg = Step === StepName ? "username" : "useravatar";
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
          <Step onNext={onNext}></Step>
        </div>
      </div>
    </>
  );
};

export default Activate;
