import React from "react";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByActivity,
  filterByContinents,
  filterByPoblation,
  getActivities,
  getCountries,
  sortByAsc,
} from "../../redux/actions";
import Card from "../../components/card/Card";
import Sort from "../../components/sort/Sort";
import Pagination from "../../components/pagination/Pagination";
import InputSearch from "../../components/inputSearch/InputSearch";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // LIST ARRAYS STATE REDUCER
  const allCountries = useSelector((state) => state.countries);
  const searchedCountries = useSelector((state) => state.searchedCountries);
  const allActivities = useSelector((state) => state.activities);
  const activitiesFiltered = useSelector((state) => state.activitiesFiltered);

  // console.log(allActivities);

  const [order, setOrder] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isFilteredByActivity, setIsFilteredByActivity] = useState(false);

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
    dispatch(getActivities());
  }, [dispatch]);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeByRegion = (e) => {
    if (e.target.value !== "Select") {
      dispatch(filterByContinents(e.target.value));
      setCurrentPage(1);
    }
  };

  const handleChangeSort = (e) => {
    if (e.target.value !== "Select") {
      dispatch(sortByAsc(e.target.value));
      setOrder(`Order ${e.target.value}`);
      setCurrentPage(1);
    }
  };

  const handleChangeSortByPoblation = (e) => {
    if (e.target.value !== "Select") {
      dispatch(filterByPoblation(e.target.value));
      setOrder(`Order ${e.target.value}`);
      setCurrentPage(1);
    }
  };

  const handleFilterByActivity = (e) => {
    if (e.target.value !== "") {
      console.log(e.target.value);
      setIsFilteredByActivity(true);
      dispatch(filterByActivity(e.target.value));
    }
  };

  const handleReset = () => {
    dispatch(getCountries());
    setIsFilteredByActivity(false);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__tap}>
        <InputSearch setIsSearched={setIsSearched} />

        <Link className={styles.home__link} to="/activity">
          Activity
        </Link>
      </div>

      <Sort
        allActivities={allActivities}
        order={order}
        handleChangeByRegion={handleChangeByRegion}
        handleChangeSort={handleChangeSort}
        handleChangeSortByPoblation={handleChangeSortByPoblation}
        handleFilterByActivity={handleFilterByActivity}
        handleReset={handleReset}
      />

      {/* If user search a country on InputSearch => Searched view */}
      {isSearched && !isFilteredByActivity && (
        <div className="searched">
          <button onClick={() => setIsSearched(false)}>Back</button>
          {searchedCountries?.map((country) => (
            <Card key={country.id} country={country} />
          ))}

          {searchedCountries.length === 0 && "City not found"}
        </div>
      )}

      {/* Default List Countries view */}
      {!isSearched && !isFilteredByActivity && (
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
      {/* Activity Filtered View */}
      {isFilteredByActivity &&
        activitiesFiltered &&
        activitiesFiltered.map((actFiltered) => {
          // console.log(actFiltered);
          return (
            <div className={styles.activity__filtered} key={actFiltered.id}>
              Filter by activity:
              {actFiltered.name}
              Countries:
              {actFiltered.Countries.map((c) => (
                <Card key={c.id} country={c} />
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default Home;
