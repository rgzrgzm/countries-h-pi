import React, { useState } from "react";
import styles from "./sort.module.css";


const Sort = ({ handleChangeSort, handleChangeByRegion }) => {

  return (
    <div className={styles.sort}>
      <div className={styles.sort__select}>
        <span>Sort by</span>

        <select onChange={(e) => handleChangeSort(e)}>
          <option>Select</option>
          <option value="asc">asc A-Z</option>
          <option value="des">des Z-A</option>
        </select>
      </div>

      <div className={styles.sort__select}>
        <span>Filter by Region</span>

        <select onChange={(e) => handleChangeByRegion(e)}>
          <option>Select</option>
          <option value={"all"}>All</option>
          <option value={"Africa"}>Africa</option>
          <option value={"North America"}>America</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceania</option>
        </select>

        <select>
          <option>Activity</option>
          <option>asc</option>
          <option>des</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
