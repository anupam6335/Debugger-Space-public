import React, { useEffect, useState } from "react";
import styles from "./Room.module.css";
import { useWebRTC } from "../../hooks/useWebRTC";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoom } from "../../http";

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { clients, provideRef, handleMute } = useWebRTC(roomId, user);
  const history = useHistory();
  const [room, setRoom] = useState(null);

  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    handleMute(isMute, user.id);
  }, [isMute]);

  const handManualLeave = () => {
    history.push("/rooms");
  };

  useEffect(() => {
    const fetchRoom = async () => {
      const { data } = await getRoom(roomId);
      // console.log(data);
      setRoom((prev) => data);
    };
    fetchRoom();
  }, [roomId]);

  const handleMuteClick = (clientId) => {
    if(clientId !== user.id) return;
    setIsMute((isMute) => !isMute);
  };

  return (
    <div>
      <div className="container">
        <button onClick={handManualLeave} className={styles.goBack}>
          <img src="/assets/arrow-left.png" alt="goBack button" />
          <span>All voice rooms</span>
        </button>
      </div>
      <div className={styles.clientsWrap}>
        <div className={styles.header}>
          <h2 className={styles.topic}>{room?.topic}</h2>
          <div className={styles.actions}>
            <button className={styles.actionBtn}>
              <img src="/assets/palm.png" alt="raise hand icon" />
            </button>
            <button onClick={handManualLeave} className={styles.actionBtn}>
              <img src="/assets/win.png" alt="leave icon" />
              <span>Leave quietly</span>
            </button>
          </div>
        </div>
        <div className={styles.clientsList}>
          {clients.map((client) => {
            return (
              <div className={styles.client} key={client.id}>
                <div className={styles.userHead}>
                  <audio
                    ref={(instance) => provideRef(instance, client.id)}
                    autoPlay
                  ></audio>
                  <img
                    className={styles.userAvatar}
                    src={client.avatar}
                    alt="avatar"
                  />

                  <button
                    onClick={() => handleMuteClick(client.id)}
                    className={styles.micBtn}
                  >
                    {client.muted ? (
                      <img
                        className={styles.mic}
                        src="/assets/mic-mute.png"
                        alt="mic"
                      />
                    ) : (
                      <img
                        className={styles.micImg}
                        src="/assets/mic.png"
                        alt="mic"
                      />
                    )}
                  </button>
                </div>
                <h4>{client.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Room;
