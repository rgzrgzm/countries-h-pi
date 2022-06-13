import React from "react";
import styles from "./activity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../../redux/actions";

const Activity = () => {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={styles.activity__list}>
      <h1>Activities</h1>

      <h3>List of activities:</h3>

      <div className={styles.activity__grid}>
        {allActivities.length === 0 && (
          <div className={styles.activity__listEmpty}>
            <h5>Activities not created yet.</h5>
          </div>
        )}

        {allActivities &&
          allActivities.map((activity) => (
            <div key={activity.id} className={styles.activity__card}>
              <div className={styles.activity__info}>
                <p className={styles.created__infoTitle}>Name:</p>
                <p>{activity.name}</p>
              </div>

              <div className={styles.activity__info}>
                <p className={styles.created__infoTitle}>Difficulty:</p>
                <p>
                  {activity.difficulty === "1"
                    ? "Very Heasy"
                    : activity.difficulty === "2"
                    ? "Easy"
                    : activity.difficulty === "3"
                    ? "Normal"
                    : activity.difficulty === "4"
                    ? "Hard"
                    : activity.difficulty}
                </p>
              </div>

              <div className={styles.activity__info}>
                <p className={styles.created__infoTitle}>Season:</p>
                <p>{activity.season}</p>
              </div>

              <p className={styles.created__infoTitle}>Countries:</p>

              {activity.Countries &&
                activity.Countries.map((c) => (
                  <div className={styles.activity__countriesInfo} key={c.id}>
                    {c.name}
                    <img src={c.flag} alt="" />
                  </div>
                ))}

              <hr />
            </div>
          ))}
      </div>

      <Link className={styles.activity__link} to="/create-activity">
        Create Activity
      </Link>
    </div>
  );
};

export default Activity;
