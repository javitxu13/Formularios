const tiempoMiddleware = (req, res, next) => {
  // Extraer el objeto tiempo del cuerpo de la solicitud (request body)
  const { tiempo } = req.body;

  // Realizar validaciones personalizadas según tus requisitos
  // Por ejemplo, aquí estamos comprobando el formato de la fecha de inicio
  if (!isValidDate(tiempo.fechaInicio)) {
      return res.status(400).send("Fecha de inicio inválida");
  }

  // Si necesitas realizar más validaciones, puedes agregarlas aquí

  // Si todo está bien, pasa al siguiente middleware
  next();
};

module.exports = tiempoMiddleware;
