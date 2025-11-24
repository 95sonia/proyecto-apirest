// 1º importar el módulo de mongoose
const mongoose = require('mongoose');

// Función para conectar a MongoDB
const dbConnect = async () => {
  try {
    // CAMBIAR EL NOMBRE APIKEY, ES URI !!!!
    await mongoose.connect(process.env.APIKEY); //usar metodo connect de mongoose porque lo dice la docu
    console.log('Conexión a MongoDB Atlas exitosa.');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    // Sale del proceso con error
    process.exit(1); 
  }
};

module.exports = dbConnect;