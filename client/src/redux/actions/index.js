import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_DETAILS = "GET_DETAILS;";
export const ORDER_BY_COUNTRY = "ORDER_BY_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
export const GET_ONLY_COUNTRIES = "GET_ONLY_COUNTRIES";
export const GET_TOUR_ACTIVITY = "GET_TOUR_ACTIVITY";
export const COUNTRY_BY_ACTIVITY = "COUNTRY_BY_ACTIVITY";

export function getCountries() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/countries");

      return dispatch({
        type: "GET_COUNTRIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountriesByName(name) {
  console.log(name);
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries?name=${name}`
      );

      return dispatch({
        type: "GET_COUNTRY_BY_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sortByAsc(value) {
  // console.log(value);
  return {
    type: "SORT_BY_ASC",
    payload: value,
  };
}

export function filterByContinents(value) {
  console.log(value);
  return {
    type: "FILTER_BY_CONTINENT",
    payload: value,
  };
}


