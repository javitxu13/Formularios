const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
