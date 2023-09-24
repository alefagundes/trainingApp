const router = require("express").Router();
const verifyToken = require("../helpers/verify-token");
const { login, register, loginPersonal, getUser } = require("../controllers/UserController");
const { userCreateValidation, userLogin, personalLogin } = require("../helpers/userValidations");
const validate = require("../helpers/handleValidate");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", userLogin(), validate, login);
router.post("/login/personal", personalLogin(), validate, loginPersonal);
router.get("/profile", getUser);

module.exports = router;
