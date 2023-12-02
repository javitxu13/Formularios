const mongoose = require('mongoose');

const procesoSchema = new mongoose.Schema({
    nombreProceso: String,
    personasIntervienen: Number,
    tiempoEstimado: Number,
    herramientasList: [String]
});

const processAutomationSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    procesosAgregados: [procesoSchema]
}, {
    collection: 'ProcessAutomation' // Nombre personalizado de la colección
});

module.exports = mongoose.model('ProcessAutomation', processAutomationSchema);
