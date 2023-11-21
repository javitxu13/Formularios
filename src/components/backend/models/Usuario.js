const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correoElectronico: String,
    empresa: String,
    cargo: String,
    sector: String,
    numeroEmpleados: Number,
    departamentos: [String]
});


module.exports = mongoose.model('Usuario', usuarioSchema);
