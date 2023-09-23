const { body } = require("express-validator");

const validateDietCreation = () => {
    return [
      body("type")
        .isString()
        .withMessage("Diata inválida.")
        .isLength({min: 12, max: 16})
        .withMessage("Informe uma dieta válida."),
        body("diet")
        .isString()
        .withMessage("Dieta inválida.")
        .isLength({min: 5})
        .withMessage("Informe os alimentos que foram sua dieta."),
    ];
  };

module.exports = { validateDietCreation };