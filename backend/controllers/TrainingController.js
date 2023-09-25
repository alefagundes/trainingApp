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

const getTrainingByIdBack = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        res.status(422).json({message: 'Erro: Id inválido'})
        return
    }
    const token = getToken(req);
    if(!token) {
        res.status(422).json({message: 'Usuário inválido ou inexistente.'})
        return
    }
    const user = await getUserByToken(token);

    if(!user){
        res.status(422).json({message: 'Usuário inválido ou inexistente.'})
        return
    }
    const trainingById = await Training.findById(id);

    if(!trainingById){
      res.status(422).json({message: 'Treino inválido ou inexistente.'})
      return
    }

    if(user._id != trainingById.userId){
      res.status(422).json({message: 'Erro, traino inválido ou inexistente.'})
      return
    }
    res.status(200).json(trainingById);
}

const deleteTrainingById = async (req, res) => {
    const {id} = req.params;
    if(!id) {
        res.status(422).json({message: 'Houve um erro, por favor tente mais tarde'});
        return
    }
    const token = getToken(req);
    if(!token) {
        res.status(422).json({message: 'Usuário não atenticado'});
        return
    }
    const user = await getUserByToken(token);
    if(!user) {
        res.status(422).json({message: 'Usuário não autenticado ou inexistente'});
        return
    }
    const trainingOfId = await Training.findById(id);
    if(!trainingOfId) {
        res.status(422).json({message: 'Treino inválido ou inexistente'});
        return
    }

    if(trainingOfId.userId != user._id){
        res.status(422).json({message: 'Houve um erro, por favor tente mais tarde.'});
        return
    }
    await Training.findByIdAndDelete(id);

    res.status(200).json({message: 'Treino excluido com sucesso.'});

}

module.exports = {trainingCreateBack, 
                  getAllTrainingBack, 
                  getTrainingByIdBack, 
                  deleteTrainingById}