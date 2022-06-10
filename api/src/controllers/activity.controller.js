const { createActivity } = require("../helpers/activity.helper");
const { Country, Activity } = require("../db");

const createActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  console.log(name);

  console.log(req.body);

  //create new activity
  try {
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
    return res.json(newActivity);
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const newActivity = await createActivity(req);
  //   if (!newActivity) {
  //     throw new Error("Activity can not be created");
  //   }

  //   return res
  //     .status(201)
  //     .json({ msg: "Activity created succesfully", newActivity });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({ error: error.message });
  // }
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
