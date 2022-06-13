import React from "react";
import styles from "../../pages/activity/activity.module.css";

const CreatedActivity = ({ newActivity, country }) => {
  return (
    <div className={styles.activity__created}>
      <div className={styles.activity__info}>
        <p className={styles.created__infoTitle}>Name:</p>
        <p>{newActivity && newActivity.name}</p>
      </div>

      <div className={styles.activity__info}>
        <p className={styles.created__infoTitle}>Difficulty:</p>
        <p>{newActivity && newActivity.difficulty}</p>
      </div>

      <div className={styles.activity__info}>
        <p className={styles.created__infoTitle}>Duration:</p>
        <p>{newActivity && newActivity.duration}</p>
      </div>

      <div className={styles.activity__info}>
        <p className={styles.created__infoTitle}>Season:</p>
        <p>{newActivity && newActivity.season}</p>
      </div>

      <p className={styles.created__infoTitle}>Countries:</p>

      {country &&
        country.map((c) => {
          return (
            <div className={styles.created__info} key={c.id}>
              <p>{c.name}</p>
              <p className={styles.created__infoTitle}>Capital:</p>
              <p>{c.capital}</p>
              <div className={styles.created__infoContinents}>
                <p className={styles.created__infoTitle}>Continents:</p>
                <p>{c.continents}</p>
                <img src={c.flag} alt="flag_country" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CreatedActivity;
