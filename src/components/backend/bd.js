const mongoose = require('mongoose');

// Nota: Utiliza el nombre del servicio y el puerto interno de MongoDB
const MONGO_URI = 'mongodb://mongo:27017/miBaseDeDatos';

const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;
