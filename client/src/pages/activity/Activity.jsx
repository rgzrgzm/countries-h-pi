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
      <div>
        {allActivities.length === 0 && (
          <div className={styles.activity__listEmpty}>
            <h5>Activities not created yet.</h5>
          </div>
        )}
        {allActivities &&
          allActivities.map((activity) => (
            <div key={activity.id}>
              <p>Name: {activity.name}</p>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Season: {activity.season}</p>
              <p>
                Country:{" "}
                {activity.Countries && activity.Countries.map((c) => c.name)}
              </p>

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
