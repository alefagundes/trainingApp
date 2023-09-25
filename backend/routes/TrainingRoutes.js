const router = require("express").Router();
const {trainingCreation} = require('../helpers/trainingValidation');
const validate = require("../helpers/handleValidate");
const {trainingCreateBack, getAllTrainingBack, getTrainingByIdBack} = require('../controllers/TrainingController')

router.post("/create", trainingCreation(), validate, trainingCreateBack);
router.get("/getAll", getAllTrainingBack);
router.get("/:id", getTrainingByIdBack);



module.exports = router;