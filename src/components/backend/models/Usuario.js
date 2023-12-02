const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correoElectronico: String,
    empresa: String,
    cargo: String,
    sector: String,
    numeroEmpleados: Number,
    departamentos: [String]
}, {
    collection: 'Usuario' // Nombre personalizado de la colección
});

module.exports = mongoose.model('Usuario', usuarioSchema);
