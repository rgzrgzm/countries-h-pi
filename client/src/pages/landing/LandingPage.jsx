import React from "react";
import styles from "./landingPage.module.css";
import { Link } from "react-router-dom";
import home_icon from "../../home_icon.svg";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landing__container}>
        <h2>¡Welcome!</h2>
        <Link to="/home">
          <p>Go to home</p>
          <img src={home_icon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
