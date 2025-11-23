# API REST de Servicios (Node.js, Express, MongoDB)

Este proyecto desarrolla una **API** para gestionar "Servicios" (CRUD), utilizando **Node.js**, **Express**, y **Mongoose**.

##  Requisitos Previos

Para poner en marcha esta API, debes tener instalado:

* **Node.js**
* **npm** (Gestor de paquetes de Node.js)
* Acceso a una base de datos **MongoDB Atlas** (para la cadena de conexión URI).

---

##  Puesta en Marcha (Instalación Local)

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu máquina de desarrollo.

### 1. Clonar el Repositorio

Abre tu terminal y descarga el proyecto:

```bash
git clone [URL_DE_TU_REPOSITORIO_DE_GITHUB]
cd api-rest-servicios
```

### 2. Instalación de Dependencias

Instala todas las librerías necesarias (express, mongoose, dotenv, cors, nodemon):

```bash
npm install
```

3. Configuración de Variables de Entorno 

La aplicación utiliza variables de entorno para manejar la configuración sensible.

A. Crear el Archivo .env

Importante: La aplicación busca el archivo llamado .env en la raíz. Si tienes una plantilla (.env.template), debes renombrarla:
Bash

# Si tienes un archivo de plantilla:
# mv .env.template .env

B. Definir las Variables

Abre el archivo .env y añade (o actualiza) las siguientes variables con tus credenciales:
Ini, TOML

# Puerto en el que se ejecutará el servidor local.
PORT=3000

# Cadena de conexión URI de tu base de datos en MongoDB Atlas.
MONGODB_URI="mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/api-servicios-db?retryWrites=true&w=majority"

4. Iniciar el Servidor (Desarrollo)

Utiliza el script dev para iniciar el servidor. Este comando utiliza Nodemon para reiniciar automáticamente la aplicación cada vez que guardes un archivo.
```bash
npm run dev
```

El servidor estará disponible localmente en: http://localhost:3000

Endpoints de la API (CRUD)

Utiliza una herramienta cliente (como Postman) para probar las operaciones CRUD. Todos los endpoints usan el prefijo base /api/v1/servicios.
Método	Ruta	Descripción	Body (JSON de Ejemplo)
POST	/api/v1/servicios	CREATE: Crea un nuevo servicio.	{"nombre": "SEO Básico", "descripcion": "Optimización inicial", "precio": 350}
GET	/api/v1/servicios	READ: Obtiene la lista completa de servicios.	Ninguno
GET	/api/v1/servicios/:id	READ: Obtiene un servicio específico por su ID.	Ninguno
PUT	/api/v1/servicios/:id	UPDATE: Modifica uno o más campos del servicio.	{"precio": 400}
DELETE	/api/v1/servicios/:id	DELETE: Elimina un servicio por su ID.	Ninguno

 Despliegue en Producción

La API se encuentra desplegada y funcionando en Render utilizando el comando npm start.

URL Pública de la API: [COLOCA AQUÍ LA URL FINAL DE TU DESPLIEGUE EN RENDER]