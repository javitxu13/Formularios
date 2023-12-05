const express = require('express');
const router = express.Router();
const { guardarTiempo } = require('../controllers/tiempoController');

router.post('/tiempo', guardarTiempo);

module.exports = router;
