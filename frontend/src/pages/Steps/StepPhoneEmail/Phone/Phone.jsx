import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import TextInputPhone from "../../../../components/shared/TextInput/TextInputPhone.jsx";
import styles from "../StepPhoneEmail.module.css";
import { sendOtp } from "../../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";
import toast from "react-hot-toast";
const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  async function submit() {
    if (!phoneNumber) {
      toast.error("Please Enter Phone Number");
      return;
    } else if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      toast.error("Phone Number Should be 10 digit ");
      return;
    }

    const { data } = await sendOtp({ phone: phoneNumber });
    // console.log(data.otp);
    toast((t) => (
      <span>
        {`Your Debugger Space OTP is ${data.otp}  `}
        <button onClick={() => toast.dismiss(t.id)}>
         close
        </button>
      </span>
    ));
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    
    onNext();
  }

  return (
    <Card title="Enter your phone number" icon="phone">
      {/* <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      /> */}
      <TextInputPhone
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={submit} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
