/*
  Rutas de usuarios / Auth
  host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidation } = require('../middlewares/field-validation');
const router = Router();
const { createUser, userLogin, tokenRenew } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
  '/',
  // Middlewares
  [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have 6+ characters').isLength({min: 6}),
    fieldValidation
  ], 
  userLogin
)

router.post(
  '/new', 
  // Middlewares
  [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have 6+ characters').isLength({min: 6}),
    fieldValidation
  ], 
  createUser
)

router.get('/renew', validateJWT, tokenRenew)


module.exports = router;