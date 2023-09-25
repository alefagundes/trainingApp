const router = require("express").Router();
const {trainingCreation} = require('../helpers/trainingValidation');
const validate = require("../helpers/handleValidate");
const {trainingCreateBack, getAllTrainingBack} = require('../controllers/TrainingController')

router.post("/create", trainingCreation(), validate, trainingCreateBack);
router.get("/getAll", getAllTrainingBack);



module.exports = router;