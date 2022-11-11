const { response } = require('express');
const Event = require('../models/Event');


const getEvent = async (req, res = response) => {

  const events = await Event.find()
                            .populate('user', 'name');



  res.json({
    ok: true,
    events
  })

}

const createEvent = async (req, res = response) => {

  const event = new Event( req.body )

  try {

    event.user = req.uid;

    const eventSaved = await event.save()
    res.json({
      ok: true,
      event: eventSaved
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error en creacion de evento'
    })
  }

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