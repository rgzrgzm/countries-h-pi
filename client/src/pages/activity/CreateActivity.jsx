import React, { useState, useEffect } from "react";
import styles from "./activity.module.css";
import arrow_back from "../../arrow_back.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  searchCountriesByName,
  createActivity,
  resetActivityCreated,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import CreatedActivity from "../../components/createdActivity/CreatedActivity";

const CreateActivity = () => {
  const dispatch = useDispatch();

  const searchedCountries = useSelector((state) => state.searchedCountries);
  const postActivities = useSelector((state) => state.postActivities);

  useEffect(() => {
    dispatch(getCountries());

    return () => dispatch(resetActivityCreated());
  }, [dispatch]);

  // INPUTS VALUES STATES
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [countrySearched, setCountrySearched] = useState("");

  // ARRAY COUNTRIES ADDED STATE
  const [countriesAdded, setCountriesAdded] = useState([]);

  // ALERTS FOR UI STATE
  const [alert, setAlert] = useState({ msg: "", type: "" });

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      difficulty === "" ||
      duration === "" ||
      season === "" ||
      countriesAdded.length === 0
    ) {
      setAlert({ msg: "All fields are required", type: "error" });

      setTimeout(() => {
        setAlert({ msg: "", type: "error" });
      }, 2000);

      return;
    }

    const newActivity = {
      name,
      difficulty,
      duration,
      season,
      countries: countriesAdded,
    };

    dispatch(createActivity(newActivity));

    //Reset inputs form
    setName("");
    setDifficulty("");
    setDuration("");
    setSeason("");
    setCountrySearched("");
    setCountriesAdded([]);

    setAlert({ msg: "Activity created succesfully!", type: "success" });
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };

  // FUNCTIONS HANDLERS COMPONENT
  const handleSearchCountry = (e) => {
    dispatch(searchCountriesByName(countrySearched));
  };

  const handleAddCountry = (country) => {
    if (countriesAdded.includes(country.name)) {
      return;
    }
    setCountrySearched("");
    setCountriesAdded([...countriesAdded, country.name]);
  };

  const handleClickDelete = (countryAdded) => {
    const countriesAddedFiltered = countriesAdded.filter(
      (c) => c !== countryAdded
    );
    setCountriesAdded(countriesAddedFiltered);
  };

  // DESTRUCTURING STATE REDUCER - NEW ACTIVITY RESPONSE
  const { newActivity, country } = postActivities;

  return (
    <div className={styles.activity}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Link to="/activity" className={styles.button__back}>
          <img src={arrow_back} alt="" />
        </Link>

        <h3>¡Create new activities!</h3>

        <div className={styles.form__input}>
          <label htmlFor="name">Name:</label>
          <input
            className={alert.type === "error" ? styles.error : null}
            value={name}
            type="text"
            name="name"
            placeholder="Ski, Remo, Surf..."
            onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
          />
        </div>

        <div className={styles.form__input}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            className={alert.type === "error" ? styles.error : null}
            value={difficulty}
            name="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option defaultChecked> -- Select -- </option>
            <option value="1">Very Easy</option>
            <option value="2">Easy</option>
            <option value="3">Normal</option>
            <option value="4">Hard</option>
            <option value="5">Expert</option>
          </select>
        </div>

        <div className={styles.form__input}>
          <label htmlFor="duration">Duration:</label>
          <input
            className={alert.type === "error" ? styles.error : null}
            value={duration}
            type="text"
            name="duration"
            placeholder="10hrs..."
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className={styles.form__input}>
          <label htmlFor="season">Season:</label>
          <select
            className={alert.type === "error" ? styles.error : null}
            value={season}
            name="season"
            onChange={(e) => setSeason(e.target.value)}
          >
            <option defaultChecked> -- Select -- </option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>

        {/* Searched Countries */}
        <div className={styles.form__input}>
          <label htmlFor="countries">Countries:</label>
          <input
            className={alert.type === "error" ? styles.error : null}
            type="text"
            value={countrySearched}
            name="countries"
            placeholder="Italy, Argentina, Colombia..."
            onChange={(e) => {
              setCountrySearched(e.target.value);
              handleSearchCountry(e);
            }}
          />

          {countrySearched !== "" &&
            searchedCountries &&
            searchedCountries.map((country) => (
              <div
                className={styles.countryAdded}
                key={country.name}
                onClick={() => handleAddCountry(country)}
              >
                {country.name} - Add
              </div>
            ))}

          {countriesAdded &&
            countriesAdded.map((countryAdded, index) => (
              <div
                className={`${styles.countryAdded} ${styles.stack}`}
                key={index}
              >
                {countryAdded} -{" "}
                <span onClick={() => handleClickDelete(countryAdded)}>
                  Delete
                </span>{" "}
              </div>
            ))}
        </div>

        <div className={styles.form__submit}>
          <button type="submit">Create Activity</button>
        </div>

        {alert.msg && (
          <p
            className={
              alert.type === "error"
                ? styles.text__error
                : alert.type === "success"
                ? styles.text__success
                : null
            }
          >
            {alert.msg}
          </p>
        )}

        {postActivities.msg && (
          <p className={styles.text__error}>{postActivities.msg}</p>
        )}
      </form>

      {newActivity && (
        <>
          <h5>Activity created:</h5>
          <CreatedActivity newActivity={newActivity} country={country} />
        </>
      )}
    </div>
  );
};

export default CreateActivity;
