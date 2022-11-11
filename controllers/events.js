const { response } = require('express');

const getEvent = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'Get Events'
  })

}

const createEvent = (req, res = response) => {

  // Verificar que tenga el evento
  console.log(req.body);

  res.json({
    ok: true,
    msg: 'Create Event'
  })

}

const updateEvent = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'Update Event'
  })

}

const deleteEvent = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'Delete Event'
  })

}

module.exports = {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
}

/**
 Obtener eventos
 {
  ok: true,
  msg: 'Obtener eventos'
 }

 Crear evento
 {
  ok: true,
  msg: 'Crear evento'
 }

 Actualizar evento
 {
  /123456
  ok: true,
  msg: 'actualizar evento'
 }

 Eliminar evento
 {
  ok: true,
  msg: elminiar evento
 }
*/