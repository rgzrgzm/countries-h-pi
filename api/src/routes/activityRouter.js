// Init router
const { Router } = require("express");
const router = Router();

//import controllers
const { createActivities } = require("../controllers/activity.controller");

router.post("/", createActivities);

module.exports = router;
