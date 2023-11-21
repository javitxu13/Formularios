const herramientasSoftwareMiddleware = (req, res, next) => {
    const { herramientasSoftware } = req.body;
    // Process or validate herramientasSoftware data
    // Example: Check if ERP or CRM fields are valid
    if (herramientasSoftware.trabajaConERP && !herramientasSoftware.erpSeleccionado) {
      return res.status(400).send("ERP selected field is missing");
    }
    // If everything is okay, move to the next middleware
    next();
  };
  