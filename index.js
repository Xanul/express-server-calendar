// Importando el paquete de express
const express = require('express');
require('dotenv').config();

// Creando el servidor de express
const app = express();

// Directorio publico
app.use( express.static('public') );

// Rutas
// app.get('/', (req, res) => {
//   res.json({
//     ok: true,
//     hola: "mundo"
//   })
// })




// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});