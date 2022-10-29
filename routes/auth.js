/*
  Rutas de usuarios / Auth
  host + /api/auth
*/
const { Router } = require('express');
const router = Router();

const { createUser, userLogin, tokenRenew } = require('../controllers/auth');

router.post('/', userLogin)

router.post('/new', createUser)

router.get('/renew', tokenRenew)

module.exports = router;