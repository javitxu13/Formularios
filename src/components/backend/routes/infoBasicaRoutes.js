const express = require('express');
const router = express.Router();
const { guardarInfoBasica } = require('../controllers/infoBasicaController');

router.post('/infobasica', guardarInfoBasica);

module.exports = router;
