const infoBasicaMiddleware = (req, res, next) => {
    const { infoBasica } = req.body;
    // Process or validate infoBasica data
    // Example: Check if all required fields are present
    if (!infoBasica.nombre || !infoBasica.correoElectronico) {
      return res.status(400).send("Missing fields in infoBasica");
    }
    // If everything is okay, move to the next middleware
    next();
  };
  