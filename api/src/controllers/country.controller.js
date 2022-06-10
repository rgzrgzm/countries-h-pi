const { Country, Activity } = require("../db");
const {
  getCountriesByName,
  getCountriesList,
  getCountryById,
} = require("../helpers/country.helper");

const getCountries = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countries = await getCountriesByName(name);
      return res.status(200).json(countries);
    }

    const countries = await getCountriesList();
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getCountriesById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const country = await getCountryById(id);
    return res.status(200).json(country);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getCountries, getCountriesById };
