/* 
  Rutas de usuarios - Events
  host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { fieldValidation } = require('../middlewares/field-validation');
const { validateJWT } = require('../middlewares/validate-jwt');




// Todas tienen que pasar por la validacion del JWT
// Obtener eventos
router.get('/', validateJWT, getEvent)

// Crear un nuevo evento
router.post(
  '/', 
  [
    validateJWT,
    check('title', 'The title is necessary').not().isEmpty(),
    check('start', 'The start date is necessary').custom( isDate ),
    check('end', 'The end date is necessary').custom( isDate ),
    fieldValidation
  ], 
  createEvent)

// // Actualizar evento
router.put(
  '/:id', 
  [
    validateJWT,
    check('title', 'The title is necessary').not().isEmpty(),
    check('start', 'The start date is necessary').custom( isDate ),
    check('end', 'The end date is necessary').custom( isDate ),
    fieldValidation
  ], 
  updateEvent)

// // Borrar evento
router.delete('/:id', validateJWT, deleteEvent)

module.exports = router;