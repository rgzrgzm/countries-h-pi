const { Country, Activity } = require("../db");

const createActivity = async (activity, countries) => {
  try {
    const newActivity = await Activity.create(activity);
    if (!newActivity) {
      throw new Error("Activity could not be created");
    }

    const newCountries = await newActivity.addCountries(countries);
    if (!newCountries) {
      throw new Error("Countries not added");
    }

    return newActivity;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { createActivity };
