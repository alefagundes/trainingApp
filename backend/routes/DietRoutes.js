const router = require("express").Router();
const {validateDietCreation} = require('../helpers/DietValidations');
const validate = require("../helpers/handleValidate");
const {saveDiet, getDiet} = require('../controllers/DietController');

router.post("/save", validateDietCreation(), validate, saveDiet);
router.get("/yourDiet", getDiet);


module.exports = router;