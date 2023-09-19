const jwt = require('jsonwebtoken')
const getToken = require('./get-Token')

const checkToken = (req, res, next) => {
  const jwtsecret = process.env.JWT_SECRET

  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Acesso negado!' })
    return
  }

  const token = getToken(req)

  if (!token) {
    res.status(401).json({ message: 'Acesso negado!' })
    return
  }

  try {
    const verified = jwt.verify(token, jwtsecret)
    req.user = verified
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token invalido!' })
  }
}

module.exports = checkToken
