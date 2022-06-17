const initialState = {
  countries: [],
  allCountries: [],
  searchedCountries: [],
  activities: [],
  activitiesFiltered: [],
  postActivities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_COUNTRY_BY_NAME":
      return {
        ...state,
        searchedCountries: action.payload,
      };

    case "SORT_BY_ASC":
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
          : //DESC ...
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

    case "GET_COUNTRY_BY_ID":
      return {
        ...state,
        searchedCountries: action.payload,
      };

    case "RESET_STATE_SEARCHED":
      return {
        ...state,
        searchedCountries: [],
      };

    case "RESET_ACTIVITY_CREATED":
      return {
        ...state,
        postActivities: [],
      };
    case "FILTER_BY_CONTINENT":
      let allCountries = state.allCountries;
      let continentFiltered =
        action.payload === "all"
          ? allCountries
          : allCountries.filter(
              (country) => country.continents === action.payload
            );
      return {
        ...state,
        countries: continentFiltered,
      };

    case "FILTER_BY_POBLATION":
      let sortByPoblation =
        action.payload === "biggest"
          ? state.countries.sort(function (a, b) {
              if (a.poblation > b.poblation) {
                return -1;
              }
              if (b.poblation > a.poblation) {
                return 1;
              }

              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.poblation > b.poblation) {
                return 1;
              }
              if (b.poblation > a.poblation) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortByPoblation,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    case "FILTER_BY_ACTIVITY":
      let allActivities = state.activities;
      let activitiesFiltered = allActivities.filter(
        (activity) => activity.name === action.payload
      );
      return {
        ...state,
        activitiesFiltered: activitiesFiltered,
      };

    case "CREATE_ACTIVITY":
      return {
        ...state,
        postActivities: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
