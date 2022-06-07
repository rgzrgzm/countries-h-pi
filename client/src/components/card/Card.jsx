import React from "react";
import styles from "./card.module.css";

const Card = ({ country }) => {
  const { name, flag, continents } = country;
  console.log(country);
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <img src={flag} alt="flag_country" />
      <div className={styles.card__description}>
          <span>{continents}</span>
      </div>
    </div>
  );
};

export default Card;
