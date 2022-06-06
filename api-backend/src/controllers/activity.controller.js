const { createActivity } = require("../helpers/activity.helper");

const createActivities = async (req, res) => {
  const { activity, countries } = req.body;

  try {
    const newActivity = await createActivity(activity, countries);
    
    if (!newActivity) {
      throw new Error("Activity couldnt created");
    }

    return res.status(201).json(newActivity);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { createActivities };
