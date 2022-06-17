// Init router
const { Router } = require("express");
const router = Router();

//import controllers
const {
  createActivities,
  getActivities,
  deleteActivity,
} = require("../controllers/activity.controller");

router.get("/", getActivities);
router.post("/", createActivities);
router.delete("/:id", deleteActivity);

module.exports = router;
