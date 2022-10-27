// Importando el paquete de express
const express = require('express');

// Creando el servidor de express
const app = express();

// Rutas
app.get('/', (req, res) => {
  res.json({
    ok: true,
    hola: "mundo"
  })
})


// Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});