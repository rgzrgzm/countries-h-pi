import React from "react";
import styles from "../../pages/home/home.module.css";
import arrow_back from "../../arrow_back.svg";
import Card from "../card/Card";

const SearchedView = ({ setIsSearched, searchedCountries }) => {
  return (
    <div className={styles.searched}>
      <img
        className={styles.searched__icon}
        src={arrow_back}
        alt="back__icon"
        onClick={() => setIsSearched(false)}
      />
      {searchedCountries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}

      {searchedCountries.length === 0 && "City not found"}
    </div>
  );
};

export default SearchedView;
