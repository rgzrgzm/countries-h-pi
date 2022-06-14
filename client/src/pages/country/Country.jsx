import React from "react";
import styles from './country.module.css'
import CardDetail from "../../components/cardDetail/CardDetail";

const Country = () => {
  return (
    <div className={styles.country__detail}>
      <h3>Country Detail</h3>
      <CardDetail />
    </div>
  );
};

export default Country;
