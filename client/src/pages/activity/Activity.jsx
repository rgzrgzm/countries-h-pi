import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  searchCountriesByName,
  createActivity,
} from "../../redux/actions";

const Activity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const searchedCountries = useSelector((state) => state.searchedCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [countrySearched, setCountrySearched] = useState("");
  const [countriesAdded, setCountriesAdded] = useState([]);
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || difficulty === "" || duration === "" || season === "") {
      setAlert({ msg: "Todos los campos son necesarios", type: "error" });
      return;
    }

    const newActivity = { name, difficulty, duration, season, countries: countriesAdded };

    dispatch(createActivity(newActivity));
  };

  const handleSearchCountry = (e) => {
    dispatch(searchCountriesByName(countrySearched));
  };

  const handleAddCountry = (country) => {
    setCountriesAdded([...countriesAdded, country.name]);
  };

  const handleClickDelete = (countryAdded) => {
    const countriesAddedFiltered = countriesAdded.filter(
      (c) => c !== countryAdded
    );
    setCountriesAdded(countriesAddedFiltered);
  };

  return (
    <div>
      <h3>Create activities</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Ski, remo, surf..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            name="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option defaultChecked>Select</option>
            <option value="1">Very Easy</option>
            <option value="2">Easy</option>
            <option value="3">Normal</option>
            <option value="4">Hard</option>
            <option value="5">Expert</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            name="duration"
            placeholder="10hrs..."
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="season">Season:</label>
          <select name="season" onChange={(e) => setSeason(e.target.value)}>
            <option defaultChecked> -- Select -- </option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
        </div>

        {/* Searched Countries */}
        <div>
          <label htmlFor="countries">Countries:</label>
          <input
            type="text"
            value={countrySearched}
            name="countries"
            onChange={(e) => {
              setCountrySearched(e.target.value);
              handleSearchCountry(e);
            }}
          />

          {countrySearched !== "" &&
            searchedCountries &&
            searchedCountries.map((country) => (
              <p key={country.name} onClick={() => handleAddCountry(country)}>
                {country.name} - agregar
              </p>
            ))}

          {countriesAdded &&
            countriesAdded.map((countryAdded, index) => (
              <p key={index}>
                {countryAdded} -{" "}
                <span onClick={() => handleClickDelete(countryAdded)}>x</span>{" "}
              </p>
            ))}
        </div>

        <button type="submit">Create</button>

        {alert.msg && <p>{alert.msg}</p>}
      </form>
    </div>
  );
};

export default Activity;
