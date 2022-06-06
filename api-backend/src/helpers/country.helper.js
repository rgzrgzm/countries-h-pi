const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountriesList = async () => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name", "capital","flag", "continents", "poblation", "subregion", "area"],
    });
    return countries;
  } catch (error) {
    throw error;
  }
};

const getCountriesByName = async (name) => {
  try {
    const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["id", "name", "capital","flag", "continents", "poblation", "subregion", "area"],
    });

    if (!country) {
      throw new Error("Country not found!");
    }

    return country;
  } catch (error) {
    throw error;
  }
};

const getCountryById = async (id) => {
  try {
    const country = await Country.findByPk(id.toUpperCase(), {
      attributes: ["id", "name", "capital","flag", "continents", "poblation", "subregion", "area"],
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "dificulty", "duration", "season"],
        },
      ],
    });

    if (!country) {
      throw new Error("Country not found");
    }

    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountriesByName,
  getCountriesList,
  getCountryById,
};
