const express = require('express');
const router = express.Router();
const { guardarHerramientasSoftware } = require('../controllers/herramientasSoftwareController');

router.post('/herramientassoftware', guardarHerramientasSoftware);

module.exports = router;
