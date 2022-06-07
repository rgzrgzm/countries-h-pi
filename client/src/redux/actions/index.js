import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";

export function getCountries() {
  return async function (dispatch) {
    const url = "http://localhost:3001/countries";
    const { data } = await axios(url);

    return dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  };
}
