// Init router
const { Router } = require("express");
const router = Router();

//import controllers
const {
  createActivities,
  getActivities,
} = require("../controllers/activity.controller");

router.get("/", getActivities);
router.post("/", createActivities);

module.exports = router;
