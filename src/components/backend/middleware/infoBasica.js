const infoBasicaMiddleware = (req, res, next) => {
  // Extraer el objeto infoBasica del cuerpo de la solicitud (request body)
  const { infoBasica } = req.body;

  // Realizar validaciones personalizadas según tus requisitos
  // Por ejemplo, aquí estamos comprobando si los campos obligatorios (nombre y correoElectrónico) están presentes
  if (!infoBasica.nombre || !infoBasica.correoElectronico) {
      return res.status(400).send("Faltan campos en infoBasica");
  }

  // Si necesitas realizar más validaciones, puedes agregarlas aquí

  // Si todo está bien, pasa al siguiente middleware
  next();
};

module.exports = infoBasicaMiddleware;
