// Init router
const { Router } = require("express");
const router = Router();

//import controllers
const { createActivity } = require("../controllers/activity.controller");

router.post("/", createActivity);
