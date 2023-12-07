const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Asegúrate de que esto está en la parte superior

// Rutas
const infoBasicaRoutes = require('./src/components/backend/routes/infoBasicaRoutes');
const herramientasSoftwareRoutes = require('./src/components/backend/routes/herramientasSoftwareRoutes');
const processAutomationRoutes = require('./src/components/backend/routes/processAutomationRoutes');
const tiempoRoutes = require('./src/components/backend/routes/tiempoRoutes');

const app = express();
app.use(express.json());

// Conexión a MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bimetrick",
    { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Detiene la aplicación en caso de error de conexión
  }
};

connectToMongoDB();

// Rutas de la API
app.use('/api/infobasica', infoBasicaRoutes);
app.use('/api/herramientassoftware', herramientasSoftwareRoutes);
app.use('/api/processautomation', processAutomationRoutes);
app.use('/api/tiempo', tiempoRoutes);

// Middleware para manejo de errores
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});