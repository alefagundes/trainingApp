const jwt = require('jsonwebtoken')
const jwtsecret = process.env.JWT_SECRET

const createUserToken = async (user, req, res) => {
  const token = jwt.sign({ email: user.email, id: user._id }, jwtsecret, {
    expiresIn: '7d',
  })
  res.status(200).json({
    message: 'Você está autenticado!',
    token,
    userId: user._id,
  })
}

module.exports = createUserToken
