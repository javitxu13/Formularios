const ProcessAutomation = require('../models/ProcessAutomationModel');

const guardarProcessAutomation = async (req, res) => {
  try {
    const data = new ProcessAutomation(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { guardarProcessAutomation };
