// Init router
const { Router } = require("express");
const router = Router();

//import controllers
const {
  getCountries,
  getCountriesById,
} = require("../controllers/country.controller");

router.get("/", getCountries);
router.get("/:id", getCountriesById);

module.exports = router;
