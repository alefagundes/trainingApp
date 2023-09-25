const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("Nome é obrigatorio!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteries"),
    body("weight").isNumeric().withMessage("O peso é obrigatótio!"),
    body("email")
      .isString()
      .withMessage("E-mail é obrigatório")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("birthDate").isISO8601().toDate().withMessage("Data invalida!"),
    body("phone")
      .isString()
      .withMessage("Telefone é obrigatório!")
      .isLength({ min: 11, max: 11 })
      .withMessage("O telefone deve conter 11 digitos!"),
    body("password")
      .isString()
      .withMessage("Senha é obrigator!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteries!"),
    body("confirmPassword")
      .isString()
      .withMessage("Confirmação de senha é obrigatório")
      .isLength({ min: 6 })
      .withMessage("A senha deve possuir no minimo 6 caracteries!")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas precisam ser iguais!");
        }
        return true;
      }),
  ];
};

const userLogin = () => {
  return [
    body("email")
      .isString()
      .withMessage("E-mail ou senha inválidos.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
    body("password")
      .isString()
      .withMessage("E-mail ou senha inválidos.")
      .isLength({ min: 6 })
      .withMessage("Formato de senha inválido."),
  ];
};

const updateUser = () => {
  return [
    body("name")
      .isString()
      .withMessage("Nome é obrigatorio!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteries"),
    body("weight").isNumeric().withMessage("O peso é obrigatótio!"),
    body("email")
      .isString()
      .withMessage("E-mail é obrigatório")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("birthDate").isISO8601().toDate().withMessage("Data invalida!"),
    body("phone")
      .isString()
      .withMessage("Telefone é obrigatório!")
      .isLength({ min: 11, max: 11 })
      .withMessage("O telefone deve conter 11 digitos!"),
    body("password")
      .isString()
      .withMessage("Senha é obrigator!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteries!"),
    body("confirmPassword")
      .isString()
      .withMessage("Confirmação de senha é obrigatório")
      .isLength({ min: 6 })
      .withMessage("A senha deve possuir no minimo 6 caracteries!")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas precisam ser iguais!");
        }
        return true;
      }),
  ];
}

const personalLogin = () => {
  return [
    body("coutEmail")
      .isString()
      .withMessage("E-mail inexistente ou incorreto.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
      body("userEmail")
      .isString()
      .withMessage("E-mail inexistente ou incorreto.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
  ];
};

module.exports = { userCreateValidation, userLogin, personalLogin, updateUser };
