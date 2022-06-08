const initialState = {
  countries: [],
  country: [],
  allCountries: [],
  searchedCountries: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        country: action.payload,
        allCountries: action.payload,
      };

    case "GET_COUNTRY_BY_NAME":
      return {
        ...state,
        searchedCountries: action.payload,
      };

    case "SORT_BY_ASC":
      console.log(action.payload);
      let sortCountries =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : //DES METHOD
            state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortCountries,
      };

    case "FILTER_BY_CONTINENT":
      const allCountries = state.allCountries;
      const continentFiltered =
        action.payload === "all"
          ? allCountries
          : allCountries.filter(
              (country) => country.continents === action.payload
            );
      return {
        ...state,
        countries: continentFiltered,
      };

    default:
      return state;
  }
}
export default rootReducer;
