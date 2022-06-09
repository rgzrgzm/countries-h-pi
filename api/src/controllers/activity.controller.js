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

// const createActivities = async (req, res) => {
//   const { activity, countries } = req.body;

//   try {
//     const newActivity = await Activity.create(activity);

//     if (!newActivity) {
//       throw new Error("Activity can not be created");
//     }

//     //Buscar el pais en la db
//     const countriesDb = await Country.findAll({
//       where: { name: countries },
//     });

//     if (!countriesDb) {
//       throw new Error("Country not found");
//     }
//     // Agregarle el pais en la db
//     newActivity.addCountries(countriesDb);

//     return res.status(201).json({ msg: "Activity created", newActivity });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ error: error.message });
//   }
// };

module.exports = { createActivities };
