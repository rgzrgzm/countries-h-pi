import axios from "axios";


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

export function getCountryById(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: "GET_COUNTRY_BY_ID",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountriesByName(name) {
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

export function resetStateSearched() {
  return {
    type: "RESET_STATE_SEARCHED",
  };
}

export function sortByAsc(value) {
  return {
    type: "SORT_BY_ASC",
    payload: value,
  };
}

export function filterByContinents(value) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: value,
  };
}

export function filterByPoblation(value) {
  return {
    type: "FILTER_BY_POBLATION",
    payload: value,
  };
}

export function createActivity(payload) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        payload
      );

      return dispatch({
        type: "CREATE_ACTIVITY",
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/activities");

      return dispatch({
        type: "GET_ACTIVITIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByActivity(value) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload: value,
  };
}
