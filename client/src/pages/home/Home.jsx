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
import Sort from "../../components/sort/Sort";
import HomeTap from "../../components/homeTap/HomeTap";
import SearchedView from "../../components/searchedView/SearchedView";
import DefaultView from "../../components/defaultView/DefaultView";
import FilteredActivityView from "../../components/filteredActivityView/FilteredActivityView";

const Home = () => {
  const dispatch = useDispatch();

  // LIST ARRAYS STATE REDUCER
  const allCountries = useSelector((state) => state.countries);
  const searchedCountries = useSelector((state) => state.searchedCountries);
  const allActivities = useSelector((state) => state.activities);
  const activitiesFiltered = useSelector((state) => state.activitiesFiltered);

  // COMPONENT STATES
  const [order, setOrder] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isFilteredByActivity, setIsFilteredByActivity] = useState(false);

  // PAGINATED LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [countryByPage, setCountryByPage] = useState(10); // eslint-disable-line

  const indexOfLastCountry = currentPage * countryByPage; // extraer el ultimo obj del arr (1p = 10 obj), (2p = sig 10)...
  const indexOfFirstCountry = indexOfLastCountry - countryByPage; // extraer el primer obj del array (obj0)
  const totalCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // COMPONENT EFFECT
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  // FUNCTIONS & HANDLERS
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
      setIsFilteredByActivity(false);
      setCurrentPage(1);
    }
  };

  const handleFilterByActivity = (e) => {
    if (e.target.value !== "") {
      setOrder("");
      setIsFilteredByActivity(true);
      dispatch(filterByActivity(e.target.value));
    }
  };

  const handleReset = () => {
    dispatch(getCountries());
    setIsFilteredByActivity(false);
    setIsSearched(false);
    setOrder("");
    setCurrentPage(1);
  };

  return (
    <div className={styles.home}>
      <HomeTap setIsSearched={setIsSearched} />

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
        <SearchedView
          setIsSearched={setIsSearched}
          searchedCountries={searchedCountries}
        />
      )}

      {/* Default List Countries view */}
      {!isSearched && !isFilteredByActivity && (
        <DefaultView
          totalCountries={totalCountries}
          allCountries={allCountries}
          countryByPage={countryByPage}
          changePage={changePage}
        />
      )}

      {/* Activity Filtered View */}
      {isFilteredByActivity && (
        <FilteredActivityView activitiesFiltered={activitiesFiltered} />
      )}
    </div>
  );
};

export default Home;
