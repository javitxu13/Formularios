const express = require('express');
const router = express.Router();
const { guardarHerramientasSoftware } = require('../controllers/herramientasSoftwareController');

router.post('/herramientas-software', guardarHerramientasSoftware);

module.exports = router;
