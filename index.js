// Importando el paquete de express
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

// Creando el servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() )

// Rutas
// El primer parametro es la ruta y el segundo es lo que queremos que se muestre en esa ruta
app.use( '/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

// Todo:
// auth: crear, login, renew
// CRUD: eventos


// Testing

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});