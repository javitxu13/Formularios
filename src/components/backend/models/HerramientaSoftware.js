const mongoose = require('mongoose');

const herramientaSoftwareSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    trabajaConERP: Boolean,
    erpSeleccionado: String,
    trabajaConCRM: Boolean,
    crmSeleccionado: String,
    trabajaConSuite: Boolean,
    suiteSeleccionada: String,
    suiteEspecifica: String,
    otrasHerramientas: Map
});

module.exports = mongoose.model('HerramientaSoftware', herramientaSoftwareSchema);
