const jwt = require('jsonwebtoken')
const User = require('../models/User')

//get user by jwt token
const getUserByToken = async (token) => {
  const jwtsecret = process.env.JWT_SECRET

  if (!token) {
    return res.status(422).json({ errors: ['Acesso negado'] })
  }
  const decoded = jwt.verify(token, jwtsecret)

  //me retorna o id do usuario e o nome dele na variavel decoded
  const user = await User.findOne({ _id: decoded.id })

  return user
}
module.exports = getUserByToken
