import React from "react";

const Pagination = ({ countryByPage, allCountries, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(allCountries / countryByPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button key={number} onClick={() => changePage(number)}>
              {number}
            </button>
          );
        })}
    </>
  );
};

export default Pagination;
