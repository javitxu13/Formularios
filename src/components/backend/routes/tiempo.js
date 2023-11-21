const express = require('express');
const router = express.Router();
const Tiempo = require('../models/Tiempo');

router.post('/', async (req, res) => {
    try {
        const tiempo = new Tiempo(req.body);
        await tiempo.save();
        res.status(201).json(tiempo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
