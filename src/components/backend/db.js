// db.js

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://username:password@localhost:27019/tuputamadre'; // Puerto actualizado a 27019

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB en el puerto 27019');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err.message);
        process.exit(1); // Sale de la aplicación en caso de fallar la conexión
    }
};

module.exports = connectDB;
