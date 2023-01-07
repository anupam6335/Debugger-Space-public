import Button from "../../../components/shared/Button/Button";
import { setAvatar } from "../../../store/activateSlice";
import Card from "../../../components/shared/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {setAuth} from '../../../store/authSlice';
import style from "./StepAvatar.module.css";
import { activate } from "../../../http";
import React, { useState } from "react";
import Loader from "../../../components/shared/Loader/Loader";
import { useEffect } from "react";



const StepAvatar = ({ onNext }) => {

  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState('/assets/monkey-avatar.png');
  const [ loading, setLoading ] = useState(false);
  const [mounted, setMounted] = useState(false);

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      // console.log(reader.result);
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    }
    // console.log(e);
  }

  // req to the server
  async function submit() {
    if(!name || !avatar) return;
    setLoading(true);
    try{
      const {data} = await activate({name, avatar});
      if(data.auth) {
        if(!mounted){
          dispatch(setAuth(data));
        }
      }
    } catch(err) {
      console.log('SUBMIT Error', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setMounted(true);
    }
  },[]);

  if(loading) return < Loader message='Activation in progress, please wait... 😎'/>;

  return (
    <>
      <Card title={`Okay, ${name}`} icon="monkey-emoji">
        <p className={style.subHeading}>How's this photo ?</p>


        <div className={style.avatarWrapper}>
            <img className={style.avatarImage} src={image} alt="user's image" />
        </div>

        <div>
          <input onChange={captureImage} id='avatarInput' type="file" className={style.avatarInput}/>
          <label htmlFor="avatarInput" className={style.avatarLabel}>
            choose a different photo
          </label>
        </div>

        <div className={style.actionButtonWrap}>
          <Button onClick={submit} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepAvatar;
