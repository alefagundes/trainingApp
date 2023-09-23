const router = require("express").Router();
const {validateDietCreation} = require('../helpers/DietValidations');
const validate = require("../helpers/handleValidate");
const {saveDiet} = require('../controllers/DietController');

router.post("/save", validateDietCreation(), validate, saveDiet);


module.exports = router;