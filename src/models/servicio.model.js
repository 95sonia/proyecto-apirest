const mongoose = require('mongoose');

// 1. Definir el Esquema. Instancia de un objeto de tipo schema. 
// Esto me devuelve una clase que tiene métodos y propiedades
// Estamos con mongoose: en el apartado de su web "defining your schema" sale la siguiente estructura:

const ServicioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true, // Para que sea obligatorio = requerido
    unique: true
  },
  descripcion: { 
    type: String, 
    required: true // descripción obligatoria
  },
  precio: { 
    type: Number, 
    required: true // precio obligatorio
  },
});

// 2. Exportar el Modelo que hemos creado arriba
//'Servicio' va a ser una clase
//Hacer uso de este modelo en aquellos lugares donde vaya a conectar con mi BD

module.exports = mongoose.model('Servicio', ServicioSchema); 