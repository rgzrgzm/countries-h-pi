import React, { useEffect } from "react";
import styles from "./cardDetail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, resetStateSearched } from "../../redux/actions";

const CardDetail = () => {
  const dispatch = useDispatch();

  const countryById = useSelector((state) => state.searchedCountries);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryById(id));

    return () => dispatch(resetStateSearched());
  }, [dispatch, id]);

  return (
    <div className={""}>
      {countryById.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cardDetail}>
          <h4>
            {countryById.name} - {countryById.capital}
          </h4>

          <img src={countryById.flag} alt="" />

          <p>{countryById.continents}</p>

          <div className={styles.cardDetail__body}>
            <div className={styles.cardDetail__info}>
              <p>Area:</p>
              <span>{countryById.area} km2</span>
            </div>

            <div className={styles.cardDetail__info}>
              <p>Poblation:</p>
              <span>{countryById.poblation}</span>
            </div>

            <div className={styles.cardDetail__info}>
              <p>Subregion:</p>
              <span>{countryById.subregion}</span>
            </div>

            <div className={styles.cardDetail__info}>
              <p>Activities:</p>
            </div>
            {countryById.Activities && countryById.Activities.length === 0
              ? "Without Activities"
              : countryById.Activities &&
                countryById.Activities.map((activity) => (
                  <span key={activity.id}> - {activity.name}</span>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
