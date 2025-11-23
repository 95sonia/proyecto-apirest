
//importar el modelo
const Servicio = require('../models/servicio.model');

// Obtener todos los servicios
const getAllServices = async (req, res) => {
    try {
        const servicios = await Servicio.find(); // Acceder a BD

        // Retornar respuesta exitosa (200 OK)
        return res.status(200).json({
            ok: true,
            message: 'Lista de servicios',
            data: servicios
        });
    } catch (error) {
        console.error('Error al obtener todos los servicios:', error);
        // Gestionar si hay error (500 Internal Server Error)
        return res.status(500).json({
            ok: false,
            message: 'Error al obtener servicios.'
        });
    }
};

//Obtener servicio por ID

const getAServiceById = async (req, res) => {
    // buscar el id en los params del endPoint
    const { id } = req.params; 

    try {
        const servicio = await Servicio.findById(id); // Acceder a BD

        // comprobar si existe
        if (!servicio) {
            // si no existe responder (404 => NOT FOUND)
            return res.status(404).json({
                ok: false,
                message: 'Servicio no encontrado'
            });
        }

        // si existe responder (200 OK)
        return res.status(200).json({
            ok: true,
            message: 'Servicio encontrado',
            data: servicio
        });
    } catch (error) {
        console.error('Error en getAServiceById:', error);
        // Gestionar si hay error (500 => Internal Server Error)
        return res.status(500).json({
            ok: false,
            message: 'Error interno del servidor.'
        });
    }
};


//Crear servicio

const createAService = async (req, res) => {
    // capturar el body
    const nuevoServicio = new Servicio(req.body); 

    try {
        const servicioGuardado = await nuevoServicio.save(); 

        // si todo bien -> retornar (201 CREATED)
        return res.status(201).json({
            ok: true,
            message: 'Servicio creado correctamente',
            data: servicioGuardado
        });
    } catch (error) {
        console.error('Error en createAService:', error);
        // Gestionar si hay error (500 Internal Server Error)
        return res.status(500).json({
            ok: false,
            message: 'Error al crear servicio.'
        });
    }
};

//Modificar servicio por ID

const updateAServiceById = async (req, res) => {
    // buscar el id en los params del endPoint
    const { id } = req.params;
    const updates = req.body; // Los campos a actualizar

    try {
        // { new: true } retorna el documento actualizado; { runValidators: true } aplica validaciones
        const servicioActualizado = await Servicio.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
          
        // comprobar si existe
        if (!servicioActualizado) {
            // si no existe responder (404 NOT FOUND)
            return res.status(404).json({
                ok: false,
                message: 'Servicio no encontrado'
            });
        }

        // si existe responder (200 OK)
        return res.status(200).json({
            ok: true,
            message: 'Servicio actualizado correctamente',
            data: servicioActualizado
        });
    } catch (error) {
        console.error('Error en updateAServiceById:', error);
        // Gestionar si hay error (500 Internal Server Error)
        return res.status(500).json({
            ok: false,
            message: 'Error al intentar actualizar.'
        });
    }
};

//Eliminar servicio por ID

const deleteAServiceById = async (req, res) => {
    // buscar el id en los params del endPoint
    const { id } = req.params;

    try {
        const servicioEliminado = await Servicio.findByIdAndDelete(id);
          
        // comprobar si existe
        if (!servicioEliminado) {
            // si no existe responder (404 NOT FOUND)
            return res.status(404).json({
                ok: false,
                message: 'Servicio no encontrado'
            });
        }

        // si existe responder (200 OK)
        return res.status(200).json({
            ok: true,
            message: 'Servicio eliminado correctamente'
        });
    } catch (error) {
        console.error('Error en deleteAServiceById:', error);
        // Gestionar si hay error (500 Internal Server Error)
        return res.status(500).json({
            ok: false,
            message: 'Error al eliminar.'
        });
    }
};


// exportamos las funciones para utilizarlas en RUTAS
module.exports = {
    getAllServices,
    getAServiceById,
    createAService,
    updateAServiceById,
    deleteAServiceById
};