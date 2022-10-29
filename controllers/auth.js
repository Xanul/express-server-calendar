// Se importa nuevamente la libreria para tener la ayuda de intellisense
const { response } = require('express')

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Create User'
  })
}

const userLogin = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'User Login'
  })
}

const tokenRenew = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Token Renew'
  })
}

module.exports = {
  createUser,
  userLogin,
  tokenRenew
}