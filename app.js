// LEER DOCU EXPRESS para realizar esta parte
const express = require('express')

// Cargar las variables de entorno. esta línea de código sale en la web de npm, leer docu
require('dotenv').config()

const dbConnect = require('./src/config/dbConnect');
const serviciosRouter = require('./src/routes/servicios.routes');  // Importar las rutas, aunque el archivo esté vacío por ahora

// 1. Conectar a la base de datos
dbConnect(); 

//2. Inicializar la app
const app = express()
const port = process.env.PORT 

//3.------------MIDDLEWARE----------------
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded()) // docu web de urlencoded npm. desde node para poder parsear el body necesitamos el componente bodyparser
app.use(express.json())
//4.-------------RUTAS (endpoints)-----------
// Definir prefijo base /api/v1/servicios para todas las rutas de ese archivo
app.use('/api/v1/servicios', serviciosRouter); 

//5.-------LISTENER: Poner a la escucha el servidor--------
//Se pone siempre la ultima

app.listen(port,()=> {
    console.log(`Servidor funcionando en el puerto ${port}`)
})
