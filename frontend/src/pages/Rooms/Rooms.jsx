import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../components/RoomCard/RoomCard";
import AddRoomModel from "../../components/AddRoomModel/AddRoomModel";
import { getAllRooms } from "../../http";
// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework best for frontend ?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 10,
//   },
//   {
//     id: 3,
//     topic: "What’s new in machine learning?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 4,
//     topic: "Why people use stack overflow?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 30,
//   },
//   {
//     id: 5,
//     topic: "Artificial inteligence is the future?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/assets/monkey-avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

const Rooms = () => {

  const [showModel, setShowModel] = useState(false);
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  },[]);

  function openModel() {
    setShowModel(true);
  }

  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}> All voice rooms </span>
            <div className={styles.searchBoxMain}>
              <div className={styles.searchBox}>
                <button className={styles.btnSearch}>
                  <img src="/assets/search-icon.png" alt="" />
                </button>
                <input
                  type="text"
                  className={styles.inpuSearch}
                  placeholder="Search podcast..."
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModel} className={styles.startRoomButton}>
              <img src="/assets/add-room-icon.png" alt="start room image" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <dir className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </dir>
      </div>
      {showModel && <AddRoomModel onClose = {()=>setShowModel(false)} />}
    </>
  );
};

export default Rooms;
