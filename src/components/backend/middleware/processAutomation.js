const processAutomationMiddleware = (req, res, next) => {
  // Extraer el objeto processAutomation del cuerpo de la solicitud (request body)
  const { processAutomation } = req.body;

  // Realizar validaciones personalizadas según tus requisitos
  // Por ejemplo, aquí estamos comprobando si la lista de procesos no está vacía
  if (processAutomation.procesosAgregados.length === 0) {
      return res.status(400).send("No se han agregado procesos en la automatización de procesos");
  }

  // Si necesitas realizar más validaciones, puedes agregarlas aquí

  // Si todo está bien, pasa al siguiente middleware
  next();
};

module.exports = processAutomationMiddleware;
