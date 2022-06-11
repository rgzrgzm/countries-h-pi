import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const DefaultView = ({
  totalCountries,
  countryByPage,
  allCountries,
  changePage,
}) => {
  return (
    <>
      {totalCountries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}

      <Pagination
        countryByPage={countryByPage}
        allCountries={allCountries.length}
        changePage={changePage}
      />
    </>
  );
};

export default DefaultView;
