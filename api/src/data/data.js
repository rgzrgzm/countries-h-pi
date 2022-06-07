const axios = require("axios");
const { Country } = require("../db");

// Get Data from API & save in DB
const getData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  
  console.log("Fetching data...");

  try {
    const { data } = await axios(url);

    const modelCountriesList = data.map((e) => {
      return {
        name: e.name.common,
        id: e.cca3,
        flag: e.flags ? e.flags.png : "Not found",
        capital: e.capital ? e.capital[0] : "Not found",
        subregion: e.subregion ? e.subregion : "Not found",
        area: e.area,
        continents: e.continents ? e.continents[0] : "Not found",
        poblation: e.population ? e.population : "Not found",
      };
    });

    modelCountriesList.forEach(async (e) => {
      await Country.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
          flag: e.flag,
          subregion: e.subregion,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          continents: e.continents,
          poblation: e.poblation,
        },
      });
    });

    console.log("DB Loaded ✔");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getData };
