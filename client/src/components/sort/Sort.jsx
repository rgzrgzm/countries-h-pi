import styles from "./sort.module.css";

const Sort = ({
  allActivities,
  order,
  handleChangeSort,
  handleChangeByRegion,
  handleChangeSortByPoblation,
  handleFilterByActivity,
  handleReset,
}) => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__select}>
        <div>
          <span>Sort by</span>
          <select onChange={(e) => handleChangeSort(e)}>
            <option>Select</option>
            <option value="asc">asc A-Z</option>
            <option value="des">des Z-A</option>
          </select>
        </div>

        <span>{order && order}</span>

        <div>
          <span>Poblation</span>
          <select onChange={(e) => handleChangeSortByPoblation(e)}>
            <option>Select</option>
            <option value="biggest">Biggest</option>
            <option value="smallest">Smallest</option>
          </select>
        </div>
      </div>

      <div className={styles.sort__select}>
        <div>
          <span>Filter by Region or Activity</span>
          <select onChange={(e) => handleChangeByRegion(e)}>
            <option>Select</option>
            <option value={"all"}>All</option>
            <option value={"Africa"}>Africa</option>
            <option value={"North America"}>America</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
          </select>

          <select onChange={(e) => handleFilterByActivity(e)}>
            <option value={""}>Activity</option>
            {allActivities &&
              allActivities.map((activity) => {
                return <option key={activity.id}>{activity.name}</option>;
              })}
          </select>
        </div>
      </div>

      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default Sort;
