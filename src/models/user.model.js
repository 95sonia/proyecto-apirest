// 1º requerir los componentes que vamos a utilizar
const { Schema, model} = require('mongoose');

//2º crear nuestro esquema
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
})

//3º exportar el modelo para poder utilizarlo en controllers

module.exports = model('User', UserSchema)