import React from "react";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../../components/card/Card";

const Home = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.home__container}>
      {allCountries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Home;
