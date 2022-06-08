import React, { useState } from "react";
import { searchCountriesByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

const InputSearch = ({setIsSearched}) => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    // console.log(countryName)
    setIsSearched(true)
    dispatch(searchCountriesByName(countryName));
    setCountryName("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          type="text"
          placeholder="Search country"
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
