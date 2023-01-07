import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
import TextInputEmail from "../../../../components/shared/TextInput/TextInputEmail";
import { useEffect } from "react";
import  toast  from "react-hot-toast";
const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  useEffect(()=> {
    toast('Email currently unavailable!',
  {
    icon: '😢😢',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  },[])
  return (
    <Card title="Enter your email id" icon="email-emoji">
      <TextInputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your email, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Email;
