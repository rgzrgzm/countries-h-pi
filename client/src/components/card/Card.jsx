import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ country }) => {
  const { name, flag, continents } = country;
  // console.log(country);
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <img src={flag} alt="flag_country" />
      
      <div className={styles.card__description}>
        <Link to={`/country/${country.id}`}>{continents}</Link>
      </div>
    </div>
  );
};

export default Card;
