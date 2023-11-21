const mongoose = require('mongoose');

const tiempoSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    fechaInicio: Date,
    fechaFinalizacion: Date,
    moneda: String,
    presupuestoRango: String
});

module.exports = mongoose.model('Tiempo', tiempoSchema);
