const express = require('express');
const router = express.Router();
const ProcessAutomation = require('../models/ProcessAutomation');

router.post('/', async (req, res) => {
    try {
        const proceso = new ProcessAutomation(req.body);
        await proceso.save();
        res.status(201).json(proceso);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
