import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.separate}>
      <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
          <img
            className={styles.logos}
            src="/assets/logo.png"
            alt="Debugger Space logo"
          />
          <span style={logoText}>Debugger Space</span>
        </Link>

        <div className={styles.navRight}>
          {user && (
            <>
              <h3>{user.name}</h3>
              <Link to="/">
                <img
                  className={styles.avatar}
                  src={user.avatar ? user.avatar : "/assets/monkey-avatar.png"}
                  width="40"
                  height="40"
                  alt={`${user.name} 's image`}
                />
              </Link>
            </>
          )}
          {isAuth && (
            <button className={styles.logoutButton} onClick={logoutUser}>
              <img src="/assets/logoOut.png" alt="logout png" />
            </button>
          )}
        </div>
      </nav>

      <div className={styles.github}>
        <a href="https://github.com/anupam6335" target="_blank">
          <img src="/github.png" alt="anupam-debnath gihub logo" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
