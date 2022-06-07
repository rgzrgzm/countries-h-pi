const { createActivity } = require("../helpers/activity.helper");
const { Country, Activity } = require("../db");

const createActivities = async (req, res) => {
  // const { name, dificulty, duration, season, countryID } = req.body;

  try {
    const newActivity = await createActivity(req.body);
    if (!newActivity) {
      throw new Error("Activity can not be created");
    }

    return res
      .status(201)
      .json({ msg: "Activity created succesfully", newActivity });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
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
