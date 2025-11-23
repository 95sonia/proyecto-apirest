// 1º importar el módulo de mongoose
const mongoose = require('mongoose');

// Función para conectar a MongoDB
const dbConnect = async () => {
  try {
    // Usar APIKEY cargada por dotenv
    await mongoose.connect(process.env.APIKEY);
    console.log('Conexión a MongoDB Atlas exitosa.');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    // Sale del proceso con error
    process.exit(1); 
  }
};

module.exports = dbConnect;