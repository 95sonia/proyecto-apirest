// 1º importar express y exportar abajo router
const express = require('express');
const router = express.Router(); // Inicializar el Router
const { check } = require('express-validator'); // importar express validator porque lo vamos a utilizar
const { validateInputs } = require('../middlewares/validateInputs.js') // importar funcion validateInputs que vamos a usar mas abajo en las rutas

const {
  getAllServices,
  getAServiceById,
  createAService,
  updateAServiceById,
  deleteAServiceById
} = require('../controllers/servicios.controller'); // Importar todas las funciones CRUD

// Establecer las Rutas CRUD con los 4 métodos POST, GET, PUT Y DELETE

// CREATE A SERVICE

router.post('/', [
  check('nombre').trim().not().isEmpty().withMessage('Introduzca su nombre por favor').isLength({ min: 2, max: 100 }).withMessage('El nombre debe contener al menos 2 caracteres'),
  check('descripcion', 'Escribe la descripción por favor').not().isEmpty().isLength({ min: 2, max: 100 }),
  check('precio').trim().not().isEmpty().withMessage('Escribe el precio por favor').isNumeric().withMessage('El precio debe ser un número'),
  check('email', 'Escribe un correo válido por favor').trim().isEmail(),
  check('telefono', 'El teléfono debe tener 9 números').trim().isInt().isLength({ min: 9, max: 9 }),
  check('cantidad').not().isEmpty().isInt().withMessage('Introduzca un número sin decimales').custom(numero => numero > 0 && numero <= 100).withMessage('Introduzca un número entre 1 y 100'),
  validateInputs
], createAService);

// READ ALL SERVICES
router.get('/', getAllServices);

// READ A SERVICE BY ID
router.get('/:id', [
  check('id').isMongoId().withMessage('El id introducido no tiene el formato Mongo (24 caracteres y hexadecimal)'),
  validateInputs
], getAServiceById);

// UPDATE A SERVICE
router.put('/:id', [
  check('nombre').trim().notEmpty().withMessage('Introduzca su nombre por favor').isLength({ min: 2, max: 100 }).withMessage('El nombre debe contener al menos 2 caracteres'),
  check('descripcion', 'Escribe la descripción por favor').notEmpty().isLength({ min: 2, max: 100 }),
  check('precio').trim().notEmpty().withMessage('Escribe el precio por favor').isNumeric().withMessage('El precio debe ser un número'),
  check('email', 'Escribe un correo válido por favor').trim().isEmail(),
  check('telefono', 'El teléfono debe tener 9 números').trim().isInt().isLength({ min: 9, max: 9 }),
  check('cantidad').notEmpty().withMessage('El campo cantidad es obligatorio').isInt().withMessage('Introduzca un número sin decimales').custom(numero => numero > 0 && numero <= 100).withMessage('Introduzca un número entre 1 y 100'),
  check('id').notEmpty().withMessage('Introduce un id').isMongoId().withMessage('El id introducido no tiene el formato Mongo, introduce un id válido'),
  validateInputs
], updateAServiceById);

// DELETE A SERVICE
router.delete('/:id', [
  // validador isMongoId comprueba que long = 24 caracteres y formato exadecimal = 1-9 y a-f
  check('id').isMongoId().withMessage('El id introducido no tiene el formato Mongo (24 caracteres y hexadecimal)'),
  validateInputs
], deleteAServiceById);

module.exports = router;
