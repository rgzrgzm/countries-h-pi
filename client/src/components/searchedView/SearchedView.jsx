import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../../pages/home/home.module.css";
import arrow_back from "../../arrow_back.svg";
import Card from "../card/Card";
import { resetStateSearched } from "../../redux/actions";

const SearchedView = ({ setIsSearched, searchedCountries }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetStateSearched());
  }, [dispatch]);

  return (
    <div className={styles.searched}>
      <img
        className={styles.searched__icon}
        src={arrow_back}
        alt="back__icon"
        onClick={() => setIsSearched(false)}
      />

      {searchedCountries.length === 0 ? (
        <div className={styles.searched__empty}>
          <h2>Country not found</h2>
        </div>
      ) : (
        searchedCountries.map((country) => (
          <Card key={country.id} country={country} />
        ))
      )}
    </div>
  );
};

export default SearchedView;
