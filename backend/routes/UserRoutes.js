const router = require("express").Router();
const verifyToken = require("../helpers/verify-token");
const { login, register, loginPersonal, getUser, updateUserBack } = require("../controllers/UserController");
const { userCreateValidation, userLogin, personalLogin, updateUser } = require("../helpers/userValidations");
const validate = require("../helpers/handleValidate");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", userLogin(), validate, login);
router.post("/login/personal", personalLogin(), validate, loginPersonal);
router.put("/profile/update", updateUser(), validate, updateUserBack);
router.get("/profile", getUser);

module.exports = router;
