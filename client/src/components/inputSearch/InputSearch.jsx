import React, { useState } from "react";
import { searchCountriesByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "../../pages/home/home.module.css";

const InputSearch = ({ setIsSearched }) => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "" || countryName === "") return;

    setIsSearched(true);
    dispatch(searchCountriesByName(countryName));
    setCountryName("");
  };

  return (
    <div className={styles.input__search}>
      <form onSubmit={handleSubmit}>
        <input
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          type="text"
          placeholder="Search country"
        />

        <button
          className={countryName.length === 0 ? styles.btn__disabled : null}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
