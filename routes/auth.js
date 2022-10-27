/*
  Rutas de usuarios
  host + /api/auth
*/

const { Router } = require('express');
const router = Router();

router.post('/new', (req, res) => {
  res.json({
    ok: true,
    msg: 'Registro'
  })
})

router.post('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Login'
  })
})

router.get('/renew', (req, res) => {
  res.json({
    ok: true,
    msg: 'Renew'
  })
})

module.exports = router;