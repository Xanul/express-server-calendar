// Importando el paquete de express
const express = require('express');
require('dotenv').config();

// Creando el servidor de express
const app = express();

// Directorio publico
app.use( express.static('public') );

// Rutas

app.use( '/api/auth', require('./routes/auth') )

// Todo:
// auth: crear, login, renew
// CRUD: eventos




// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});