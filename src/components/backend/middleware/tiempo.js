const tiempoMiddleware = (req, res, next) => {
    const { tiempo } = req.body;
    // Process or validate tiempo data
    // Example: Check date format
    if (!isValidDate(tiempo.fechaInicio)) {
      return res.status(400).send("Invalid start date");
    }
    // If everything is okay, move to the next middleware
    next();
  };
  