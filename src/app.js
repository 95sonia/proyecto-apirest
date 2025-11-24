// LEER DOCU EXPRESS para realizar esta parte
const express = require('express')

// Cargar las variables de entorno. este código sale en la web de npm, leer docu
require('dotenv').config()

const dbConnect = require('./config/dbConnect');
const serviciosRouter = require('./routes/servicios.routes');  // Importar las rutas, aunque el archivo esté vacío por ahora

// 1. Conectar a la base de datos
dbConnect(); 

//2. Inicializar la app
const app = express()
const port = process.env.PORT 

//3.------------MIDDLEWARE----------------
app.use(express.urlencoded()) // docu web de urlencoded npm. desde node para poder parsear el body necesitamos el componente bodyparser
app.use(express.json())

//4.-------------RUTAS (endpoints)-----------
// Definir prefijo base /api/v1/servicios para todas las rutas 
app.use('/api/v1/servicios', serviciosRouter); 


//5.-------LISTENER: Poner a la escucha el servidor ="levantar" el servidor. Se pone siempre al final del archivo !!

app.listen(port,()=> {
    console.log(`Servidor funcionando en el puerto ${port}`)
})
