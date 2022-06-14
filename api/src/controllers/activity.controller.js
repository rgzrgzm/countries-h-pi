const { createActivity } = require("../helpers/activity.helper");
const { Country, Activity } = require("../db");

const createActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  //create new activity
  try {
    const existActivity = await Activity.findAll({
      where: {
        name: name,
      },
    });

    if (existActivity.length > 0) {
      return res.json({ msg: `The activity "${name}" already exist!, create a new one`});
    }

    if (existActivity.length === 0) {
      const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
      });

      const country = await Country.findAll({
        where: {
          name: countries,
        },
      });

      // Insert country on a new activity
      await newActivity.addCountries(country);
      return res.json({ newActivity, country });
    }
  } catch (error) {
    console.log(error);
  }

};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      attributes: ["id", "name", "difficulty", "duration", "season"],
      include: Country,
    });

    if (!activities) {
      return res.status(500).json({ msg: "Activities not exist" });
    }

    return res.json(activities);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createActivities, getActivities };
