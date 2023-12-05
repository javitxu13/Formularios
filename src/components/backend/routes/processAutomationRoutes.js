const express = require('express');
const router = express.Router();
const { guardarProcessAutomation } = require('../controllers/processAutomationController');

router.post('/processautomation', guardarProcessAutomation);

module.exports = router;
