const { Country, Activity } = require("../db");

const createActivity = async (req) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    //Create new activity
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    if (!newActivity) {
      throw new Error("Activity could not be created");
    }

    //Search country in db
    const country = await Country.findAll({
      where: {
        name: countries,
      },
    });

    // Insert country on a new activity
    await newActivity.addCountries(country);
    return newActivity;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { createActivity };
