import React from "react";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinents, getCountries } from "../../redux/actions";
import Card from "../../components/card/Card";
import Sort from "../../components/sort/Sort";
import Pagination from "../../components/pagination/Pagination";
import InputSearch from "../../components/inputSearch/InputSearch";
import { sortByAsc } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);
  const searchedCountries = useSelector((state) => state.searchedCountries);

  const [order, setOrder] = useState("");

  const [isSearched, setIsSearched] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [countryByPage, setCountryByPage] = useState(10);

  const indexOfLastCountry = currentPage * countryByPage; // extraer el ultimo obj del arr (1p = 10 obj), (2p = sig 10)...
  const indexOfFirstCountry = indexOfLastCountry - countryByPage; // extraer el primer obj del array (obj0)
  const totalCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeByRegion = (e) => {
    dispatch(filterByContinents(e.target.value));
    setCurrentPage(1);
  };

  const handleChangeSort = (e) => {
    if (e.target.value !== "Select") {
      dispatch(sortByAsc(e.target.value));
      setOrder(`Order ${e.target.value}`);
      setCurrentPage(1);
    }
  };

  return (
    <div className={styles.home__container}>
      <div className={styles.home__tap}>
        <InputSearch setIsSearched={setIsSearched} />
        <p>Activity</p>
      </div>

      <Sort
        handleChangeByRegion={handleChangeByRegion}
        handleChangeSort={handleChangeSort}
      />

      {isSearched ? (
        <div className="searched">
          <button onClick={() => setIsSearched(false)}>Back</button>
          {searchedCountries?.map((country) => (
            <Card key={country.id} country={country} />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Home;
