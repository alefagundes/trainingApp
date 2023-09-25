const router = require("express").Router();

//middlewares validations
const {trainingCreation} = require('../helpers/trainingValidation');
const validate = require("../helpers/handleValidate");

//functions controllers
const {trainingCreateBack, 
       getAllTrainingBack, 
       getTrainingByIdBack, 
       deleteTrainingById} = require('../controllers/TrainingController')

router.post("/create", trainingCreation(), validate, trainingCreateBack);
router.get("/getAll", getAllTrainingBack);
router.get("/:id", getTrainingByIdBack);
router.delete("/:id", deleteTrainingById);



module.exports = router;