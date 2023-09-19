const router = require("express").Router();
const verifyToken = require("../helpers/verify-token");
const { login, register } = require("../controllers/UserController");
const { userCreateValidation, userLogin } = require("../helpers/userValidations");
const validate = require("../helpers/handleValidate");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", userLogin(), validate, login);

module.exports = router;
