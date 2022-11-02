// Se importa nuevamente la libreria para tener la ayuda de intellisense
const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');


const createUser = async (req, res = response) => {
  
  const { email, password } = req.body;

  try {
    
    let user = await User.findOne({ email: email });
  
    if ( user ) {
      return res.status(400).json({
        ok: false,
        msg: 'There is already a user with that email'
      })
    }

    user = new User( req.body );

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    await user.save();
    // Generar JWT
    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token: token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please call admin'
    }) 
  }
}

const userLogin = async (req, res = response) => {
  
  const { email, password } = req.body

  try {
    
    const user = await User.findOne({ email: email });

    if ( !user ) {
      return res.status(400).json({
        ok: false,
        msg: 'There is no user registered with that email'
      })
    }

    // Confirmar contraseñas
    const validPassword = bcrypt.compareSync( password, user.password );
    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect password'
      })
    }

    // Generar nuestro JWT

    const token = await generateJWT(user.id, user.name);

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token: token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please call admin'
    }) 
  }


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