const express = require('express')
const {check} = require('express-validator') // lo usaremos mas adelante para validar, igual que en servicios
const router = express.Router()
const { createUser, loginUser, /*renewToken*/ } = require('../controllers/user.controllers') // Importar las funciones desde controllers

//REGISTER
router.post('/new', /*[validacion],*/ createUser)


//LOGIN
router.post('/', /*[validacion],*/ loginUser)


//RENEWTOKEN
// router.get('/renew', /*validarJWT,*/ renewToken)


module.exports = router