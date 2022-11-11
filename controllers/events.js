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

const updateEvent = async (req, res = response) => {

  const eventID = req.params.id;
  const uid = req.uid;

  try {
    
    const event = await Event.findById( eventID );
    console.log(event.user);

    if( !event ) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe con ese ID'
      })
    }

    if ( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }

    const updatedEvent = await Event.findByIdAndUpdate( eventID, newEvent, { new: true } );

    res.json({
      ok: true,
      event: updatedEvent
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error en actualizacion'
    })
  }

}

const deleteEvent = async (req, res = response) => {

  const eventID = req.params.id;
  const uid = req.uid;
  
  try {
    
    const event = await Event.findById( eventID );
    
    if( !event ) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe con ese ID'
      })
    }

    if ( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      })
    }

    const deletedEvent = await Event.findByIdAndDelete( eventID )

    res.json({
      ok: true,
      deletedEvent
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'No se pudo eliminar el evento'
    })
  }

  

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