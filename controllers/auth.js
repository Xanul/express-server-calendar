// Se importa nuevamente la libreria para tener la ayuda de intellisense
const { response } = require('express');

const createUser = (req, res = response) => {
  
  const { name, email, password } = req.body

  res.status(201).json({
    ok: true,
    msg: 'Create User',
    name,
    email,
    password
  })
}

const userLogin = (req, res = response) => {
  
  const { email, password } = req.body

  res.status(200).json({
    ok: true,
    msg: 'User Login',
    email,
    password
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