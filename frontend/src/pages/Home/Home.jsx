import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";


const Home = () => {
  const signInLinkStyle = {
    color: "#6C63FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "15px",
  };
  const history = useHistory();
  const startRegister = () => {
    history.push('/authenticate');
    // console.log('button clicked');
  }

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img
          src="/assets/PodcastAudMain.svg"
          alt="podcast image"
          draggable="false"
        />
      </div>

      <Card title="Welcmoe to Debugger Space" icon="logo">
        <p className={styles.text}>
          Welcome to our growing Debugger Space community. Please feel free to
          find whatever you need in our podcast. We got you covered. Your
          presence brings us delight because we are built to provide for your
          needs. Together we will create a difference!
        </p>
        <div>
          <Button onClick={startRegister}  text="Let's Go" />
        </div>

        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite code?</span>
          {/* <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link> */}
        </div>
      </Card>
      {/* <div className={styles.right}>
        <div className={styles.headingWrapper}>
          <img src="/assets/logo.png" alt="" />
          <h1 className={styles.heading}>Welcmoe to Debugger Space</h1>
        </div>
        <p className={styles.text}>
          we're working hard to get Debugger Space ready for everyone! while we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <button>
            <span>Get your username</span>
            <img src="/assets/arrow-forward.png" alt="" />
          </button>
        </div>

        <div>
          <span>Have an invite code?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
