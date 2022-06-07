const { Country, Activity } = require("../db");

const createActivity = async (activity) => {
  const { name, dificulty, duration, season, countryID } = activity;

  try {
    //Create new activity
    const newActivity = await Activity.create({
      name,
      dificulty,
      duration,
      season,
    });

    if (!newActivity) {
      throw new Error("Activity could not be created");
    }

    //Search country in db
    const country = await Country.findAll({
      where: {
        id: countryID,
      },
    });

    // Insert country on a new activity
    newActivity.addCountries(country)
    return newActivity;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { createActivity };
