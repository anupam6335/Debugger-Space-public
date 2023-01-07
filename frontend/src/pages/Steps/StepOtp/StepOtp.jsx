import React, { useState } from "react";
import style from "./StepOtp.module.css";
import styles from "../../Home/Home.module.css";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Button/Button";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import TextInputOtp from "../../../components/shared/TextInput/TextInputOtp";
import toast from 'react-hot-toast';

const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  async function submit() {
    if (!otp || !phone || !hash){
      toast((t) => (
        <span>
          invalid OTP or OTP expired <b/><b/>😎 don't worry please reload the page or press ctrl + r
          <button onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </span>
      ));

      return;}
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }
  let bg = "otp2";
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={`/assets/otp.svg`} alt="podcast image" draggable="false" />
        </div>
        <div className={styles.right}>
          <Card title="Enter the code we just texted you" icon="lock-emoji">
            {/* <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} /> */}
            <TextInputOtp value={otp} onChange={(e) => setOtp(e.target.value)} />
            <div className={style.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
            </div>
            <p className={style.bottomParagraph}>
              By entering your number, you’re agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StepOtp;
