import React from "react";
import Card from "../card/Card";
import styles from "../../pages/home/home.module.css";
import Pagination from "../pagination/Pagination";

const DefaultView = ({
  totalCountries,
  countryByPage,
  allCountries,
  changePage,
}) => {
  return (
    <>
      <Pagination
        countryByPage={countryByPage}
        allCountries={allCountries.length}
        changePage={changePage}
      />
      <div className={styles.grid__container}>
        {totalCountries?.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </div>
    </>
  );
};

export default DefaultView;
