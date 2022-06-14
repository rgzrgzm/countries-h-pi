import React from "react";
import styles from '../../pages/home/home.module.css'
import Card from "../card/Card";

const FilteredActivityView = ({ activitiesFiltered }) => {
  const nameActivity = activitiesFiltered[0].name;
  return (
    <div>
      <div className={styles.filtered__info}>
        <h2>Filtered by Activity:</h2>
        <p>{nameActivity}</p>
      </div>
      {activitiesFiltered &&
        activitiesFiltered.map((actFiltered) => {
          // console.log(actFiltered);
          return (
            <div className="" key={actFiltered.id}>
              {/* Filter by activity:
              {actFiltered.name} */}
              {actFiltered.Countries.map((c) => (
                <Card key={c.id} country={c} />
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default FilteredActivityView;
