import React from "react";
import styles from "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/home">Go to Home :iconcasita: </Link>
    </div>
  );
};

export default LandingPage;
