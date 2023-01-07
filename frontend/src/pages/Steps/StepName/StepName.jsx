import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import style from './StepName.module.css';
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import { setName } from "../../../store/activateSlice";
import TextInputName from "../../../components/shared/TextInput/TextInputName";
import toast from 'react-hot-toast';


const StepName = ({ onNext }) => {

  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState(name);


  function nextStep () {
    if(!fullname) {
      toast.error('Please Enter your name')
      return;
    }

    dispatch(setName(fullname));
    onNext();
  }



  return (
    <>
      <Card title="What's your full name?" icon="goggle-emoji">
        <TextInputName  value={fullname} onChange={(e) => setFullname(e.target.value)} />
        
        <p className={style.bottomParagraph}>
          people use real name at Debugger Space :) !
        </p>
        <div className={style.actionButtonWrap}>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepName;
