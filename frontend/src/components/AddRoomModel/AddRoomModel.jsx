import React, { useState } from "react";
import styles from "./AddRoomModel.module.css";
import TextInput from "../shared/TextInput/TextInput";
import { createRoom as create } from "../../http";
import { useHistory } from "react-router-dom";
import TextInputModal from "../shared/TextInput/TextInputModal.jsx";
import toast from 'react-hot-toast';
const AddRoomModel = ({ onClose }) => {
  const history = useHistory();
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      history.push(`/room/${data.id}`);
    } catch (err) {
      console.log(err.message);
    }
    toast.success('Room Created');
  }

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src="/assets/close.png" alt="close" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic to be disscussed</h3>
          <TextInputModal
            fullwidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          {/* <TextInput
            fullwidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          /> */}
          <h2 className={styles.subHeading}>Room type</h2>
          <div className={styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.typeBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/assets/globe.png" alt="globe" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.typeBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/assets/social.png" alt="social" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("lock")}
              className={`${styles.typeBox} ${
                roomType === "lock" ? styles.active : ""
              }`}
            >
              <img src="/assets/lock.png" alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          {/* <button onClick={createRoom} className={styles.footerButton}>
            <img src="/assets/celebration.png" alt="celebration" />
            Lets' go
          </button> */}
          <button onClick={createRoom} className={styles.footerButton} role="button">
            <span className={styles.footerButton82Shadow}></span>
            <span className={styles.footerButton82edge}></span>
            <span className={`${styles.footerButton82Front} ${styles.text}`}>
              Create Room
            </span>
            {/* <img className={styles.arrow} src="/assets/arrow-forward.png" alt="" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModel;
