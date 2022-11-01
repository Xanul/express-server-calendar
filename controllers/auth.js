// Se importa nuevamente la libreria para tener la ayuda de intellisense
const { response } = require('express');
const { validationResult } = require('express-validator');


const createUser = (req, res = response) => {
  
  const errors = validationResult(req);
  const { name, email, password } = req.body

  // Manejo de errores
 if ( !errors.isEmpty() ) {
  return res.status(400).json({
    ok: false,
    errors: errors.mapped()
  })
 }

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
  const errors = validationResult(req);
  
  // Manejo de errores
  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

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