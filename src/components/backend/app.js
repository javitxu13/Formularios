const express = require('express');
const conectarDB = require('./bd');

// Iniciar la aplicación Express
const app = express();

// Conectar a MongoDB
conectarDB();

// Puerto para el servidor (puede ser cualquier puerto libre)
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
    res.send('Servidor Node.js Funcionando');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
