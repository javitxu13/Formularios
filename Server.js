const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');

require('dotenv').config(); // Asegúrate de que esto está en la parte superior

// Rutas
const infoBasicaRoutes = require('./src/components/backend/routes/infoBasicaRoutes');
const herramientasSoftwareRoutes = require('./src/components/backend/routes/herramientasSoftwareRoutes');
const processAutomationRoutes = require('./src/components/backend/routes/processAutomationRoutes');
const tiempoRoutes = require('./src/components/backend/routes/tiempoRoutes');

const app = express();

app.use(express.json())
app.use(cors())

// Conexión a MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://formula:for12345@cluster0.gze96ma.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Detiene la aplicación en caso de error de conexión
  }
};

connectToMongoDB();
// Middleware para manejo de errores
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});




// Rutas de la API
app.post('/api/infobasica', infoBasicaRoutes);
app.post('/api/herramientassoftware', herramientasSoftwareRoutes);
app.post('/api/processautomation', processAutomationRoutes);
app.post('/api/tiempo', tiempoRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});