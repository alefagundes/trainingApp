const getToken = require("../helpers/get-Token");
const getUserByToken = require("../helpers/get-user-by-token");
const Diet = require("../models/Diet");

const saveDiet = async (req, res) => {
    const {diet, type} = req.body;
    const token = getToken(req);

    if(!token) {
        res.status(401).json({message: 'Usuário não autenticado!'});
        return
    }
    const user = await getUserByToken(token);

    if(!user){
        res.status(422).json({message: 'Token invalido para usuário.'});
        return
    }
    const findByDiet = await Diet.findOne({userId: user._id});
    
    if(findByDiet) {
        const updateDietData = {
            diet,
            type,
            userId: findByDiet.userId
        }
        try {
            await Diet.findByIdAndUpdate(findByDiet._id, updateDietData);
            res.status(204).json({message: 'Dieta atualizada com sucesso'})
        }catch(err){
            res.status(500).json({message: `Erro: ${err}`});
        }

    }
    if(!findByDiet) {
        const createDiet = {
            diet,
            type,
            userId: user._id
        }
        try{
            await Diet.create(createDiet);
            return res.status(200).json({message: 'Dieta criada com sucesso.'}) 
        }catch(err) {
            return res.status(500).json({message: `Error: ${err}`})
        }
    }
}


module.exports = { saveDiet };