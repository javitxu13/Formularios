// Middleware para validar herramientas de software
const herramientasSoftwareMiddleware = (req, res, next) => {
    const { herramientasSoftware } = req.body;
  
    if (!herramientasSoftware) {
      return res.status(400).send("herramientasSoftware is missing");
    }
  
    if (herramientasSoftware.trabajaConERP && !herramientasSoftware.erpSeleccionado) {
      return res.status(400).send("ERP selected field is missing");
    }
  
    next();
  };
  
  // Middleware para validar información básica
  const infoBasicaMiddleware = (req, res, next) => {
    const { infoBasica } = req.body;
  
    if (!infoBasica) {
      return res.status(400).send("infoBasica is missing");
    }
  
    if (!infoBasica.nombre || !infoBasica.correoElectronico) {
      return res.status(400).send("Missing fields in infoBasica");
    }
  
    next();
  };
  
  // Middleware para validar automatización de procesos
  const processAutomationMiddleware = (req, res, next) => {
    const { processAutomation } = req.body;
  
    if (!processAutomation) {
      return res.status(400).send("processAutomation is missing");
    }
  
    if (processAutomation.procesosAgregados.length === 0) {
      return res.status(400).send("No processes added in process automation");
    }
  
    next();
  };
  
  // Middleware para validar información de tiempo
  const tiempoMiddleware = (req, res, next) => {
    const { tiempo } = req.body;
  
    if (!tiempo) {
      return res.status(400).send("tiempo is missing");
    }
  
    if (!isValidDate(tiempo.fechaInicio)) {
      return res.status(400).send("Invalid start date");
    }
  
    next();
  };
  
  // Función para validar el formato de fecha
  function isValidDate(dateString) {
    // Implementa tu lógica de validación de fechas aquí
    return moment(dateString, 'YYYY-MM-DD', true).isValid();
  }
  
  // Exportando los middlewares
  module.exports = {
    herramientasSoftwareMiddleware,
    infoBasicaMiddleware,
    processAutomationMiddleware,
    tiempoMiddleware
  };
  