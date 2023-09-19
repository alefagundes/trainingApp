const { body } = require('express-validator')

const createProductValidation = () => {
  return [
    body('name').isString().withMessage('O nome do produto é obrigatório'),
  ]
}
