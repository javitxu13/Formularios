const processAutomationMiddleware = (req, res, next) => {
    const { processAutomation } = req.body;
    // Process or validate processAutomation data
    // Example: Check if processes list is not empty
    if (processAutomation.procesosAgregados.length === 0) {
      return res.status(400).send("No processes added in process automation");
    }
    // If everything is okay, move to the next middleware
    next();
  };
  