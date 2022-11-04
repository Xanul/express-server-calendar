/* 
  Rutas de usuarios - Events
  host + /api/events
*/

const { Router } = require('express');
const router = Router();
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');


// Todas tienen que pasar por la validacion del JWT
// Obtener eventos
router.get('/', validateJWT, getEvent)

// Crear un nuevo evento
router.post('/', validateJWT, createEvent)

// // Actualizar evento
router.put('/:id', validateJWT, updateEvent)

// // Borrar evento
router.delete('/:id', validateJWT, deleteEvent)

module.exports = router;