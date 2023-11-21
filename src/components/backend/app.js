const express = require('express');
const Usuario = require('./models/Usuario'); // Modelo para infoBasica
const HerramientaSoftware = require('./models/HerramientaSoftware'); // Modelo para herramientasSoftware
const Tiempo = require('./models/Tiempo'); // Modelo para tiempo
const ProcessAutomation = require('./models/ProcessAutomation'); // Modelo para processAutomation

const app = express();
app.use(express.json());

app.post('/api/info-basica', infoBasicaMiddleware, async (req, res) => {
    try {
      const usuario = new Usuario(req.body);
      await usuario.save();
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/api/herramientas-software', herramientasSoftwareMiddleware, async (req, res) => {
    try {
      const herramienta = new HerramientaSoftware(req.body);
      await herramienta.save();
      res.status(201).json(herramienta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/api/horario', tiempoMiddleware, async (req, res) => {
    try {
      const tiempo = new Tiempo(req.body);
      await tiempo.save();
      res.status(201).json(tiempo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/api/process-automation', processAutomationMiddleware, async (req, res) => {
    try {
      const proceso = new ProcessAutomation(req.body);
      await proceso.save();
      res.status(201).json(proceso);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
// Resto de la configuración de Express...

module.exports = app;





