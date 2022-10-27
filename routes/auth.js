/*
  Rutas de usuarios
  host + /api/auth
*/

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    hola: "mundo"
  })
})

module.exports = router;