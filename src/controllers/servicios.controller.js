
//importar el modelo
const Servicio = require('../models/servicio.model');


//Crear servicio. Los datos entran del body. 
// El body lo mando desde el front con unos formularios que ya crearemos. De momento se puede simular con postman

const createAService = async (req, res) => {
    // capturar el body, es un atributo donde tendré los datos enviados desde el formulario
    const nuevoServicio = new Servicio(req.body); //requerimos el objeto de nombre, precio etc que hemos creado en postman para poder enviarlo
console.log(req.body)
    try {
        const servicioGuardado = await nuevoServicio.save(); //save es un método mongoose para almacenar, crear un servicio en la BD. como hay latencia- espera- usamos await
        console.log(servicioGuardado)
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
            message: 'Contacte con el administrador'
        });
    }
};


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

//Modificar servicio por ID

const updateAServiceById = async (req, res) => {
    // buscar el id en los params (un array) del endPoint, los params están en el objeto req
    const { id } = req.params;
    //console.log(id);
    const body = req.body; // Los campos a actualizar se obtienen del body
    //console.log(body); -> me muestra el objeto creado en postman

    try {
        // { new: true } retorna el documento actualizado
        // almaceno en una const para saber lo q me esta devolviendo
        const servicioActualizado = await Servicio.findByIdAndUpdate(id, body, { new: true});
        //console.log(servicioActualizado)
        // comprobar si existe
        if (!servicioActualizado) {
            // si no existe responder (404 = NOT FOUND)
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
    //console.log(req.params)
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