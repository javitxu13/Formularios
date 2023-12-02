const herramientasSoftwareMiddleware = (req, res, next) => {
  // Extraer el objeto herramientasSoftware del cuerpo de la solicitud (request body)
  const { herramientasSoftware } = req.body;

  // Realizar validaciones personalizadas según tus requisitos
  // Por ejemplo, aquí estamos comprobando si se seleccionó ERP pero falta la selección específica
  if (herramientasSoftware.trabajaConERP && !herramientasSoftware.erpSeleccionado) {
      return res.status(400).send("El campo ERP seleccionado está ausente");
  }

  // Si necesitas realizar más validaciones, puedes agregarlas aquí

  // Si todo está bien, pasa al siguiente middleware
  next();
};

module.exports = herramientasSoftwareMiddleware;
