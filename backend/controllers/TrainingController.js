const getToken = require("../helpers/get-Token");
const getUserByToken = require("../helpers/get-user-by-token");
const Training = require('../models/Training')

const trainingCreateBack = async (req, res) => {
    const {cout, day, exercises, observations, shift, training} = req.body;
    const token = getToken(req);
    if(!token) {
        res.status(422).json({message: 'Usuário não autenticado'});
        return
    }
    const user = await getUserByToken(token);
    if(!user){
        res.status(422).json({message: 'Usário não autenticado'})
    }
    const newTraining = {
        cout,
        day,
        exercises,
        observations,
        shift, 
        training,
        userId: user._id,
    }
    try {
        await Training.create(newTraining)
        res.status(201).json({message: 'Treino criado com sucesso'});
    }catch(err) {
        res.status(500).json({message: 'Houve um problema, por favor tente mais tarde.'})
    }
}

const getAllTrainingBack = async (req, res) => {
    const token = getToken(req);
    if(!token) {
        res.status(422).json({message: 'Usuário não autenticado.'})
        return
    }
    const user = await getUserByToken(token);

    if(!user) {
        res.status(422).json({message: 'Usuário não autenticado.'})
    }
    const training = await Training.find({userId: user._id}).sort('-createdAt');

    if(!training){
     res.status(422).json({message: 'Não há treinos cadastrados'})
     return
    }
    res.status(200).json(training);
}

module.exports = {trainingCreateBack, getAllTrainingBack}