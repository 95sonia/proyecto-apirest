// 1º importar express y exportar abajo router
const express = require('express');
const router = express.Router(); // Inicializar el Router

const {
  getAllServices,
  getAServiceById,
  createAService,
  updateAServiceById,
  deleteAServiceById
} = require('../controllers/servicios.controller'); // Importar todas las funciones CRUD

// Establecer las Rutas CRUD con los 4 métodos POST, GET, PUT Y DELETE

// CREATE
router.post('/', createAService);

// READ
router.get('/', getAllServices);
router.get('/:id', getAServiceById);

// UPDATE
router.put('/:id', updateAServiceById);

// DELETE
router.delete('/:id', deleteAServiceById);

module.exports = router;