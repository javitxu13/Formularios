const express = require('express');
const router = express.Router();
const HerramientaSoftware = require('../models/HerramientaSoftware');

router.post('/', async (req, res) => {
    try {
        const herramienta = new HerramientaSoftware(req.body);
        await herramienta.save();
        res.status(201).json(herramienta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
