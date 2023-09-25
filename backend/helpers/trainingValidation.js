const {body} = require('express-validator')

const trainingCreation = () => {
    return [
        body('training').
        isString().
        withMessage('Deve ser informada uma descrição valida de trieno').
        isLength({min: 1}).withMessage('Deve ser informado o tipo de treino'),
        body('shift').isNumeric().
        withMessage('Deve ser informada o número de séries'),
        body('exercises').isString()
        .withMessage('Informe a descrição dos seus treinos').isLength({min: 10})
        .withMessage('Informe uma descrição válida'),
        body('day').isString('Informe o dia da semana referente ao trieno.').isLength({min: 6})
        .withMessage('Informe um dia da semana válido')
    ];
}

module.exports = {trainingCreation}