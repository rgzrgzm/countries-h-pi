import React from "react";
import styles from "../../pages/home/home.module.css";

const Pagination = ({ countryByPage, allCountries, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(allCountries / countryByPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination__container}>
      {pageNumbers &&
        pageNumbers.map((number, index) => {
          return number < 25 ? (
            <button key={index} onClick={() => changePage(number)}>
              {number}
            </button>
          ) : null;
        })}
    </div>
  );
};

export default Pagination;
