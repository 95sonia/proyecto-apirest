# API REST de Servicios (Node.js, Express, MongoDB)

Este proyecto desarrolla una **API** para gestionar "Servicios" (CRUD), utilizando **Node.js**, **Express**, y **Mongoose**.

##  Requisitos Previos

Para poner en marcha esta API, debes tener instalado:

* **Node.js**
* **npm** (Gestor de paquetes de Node.js)
* Acceso a una base de datos **MongoDB Atlas**

---

##  Puesta en Marcha (Instalación Local)

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu máquina de desarrollo.

### 1. Clonar el Repositorio

Abre tu terminal y descarga el proyecto:

```bash
git clone [URL_REPOSITORIO_GITHUB]
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
Abre el archivo .env y añade (o actualiza) las siguientes variables con tus credenciales:

# Puerto en el que se ejecutará el servidor local.
PORT=3000

# Cadena de conexión URI de tu base de datos en MongoDB Atlas.
MONGODB_URI="mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/api-servicios-db?retryWrites=true&w=majority"

4. Iniciar el Servidor (Desarrollo)

Utiliza el script dev para iniciar el servidor. Este comando utiliza Nodemon para reiniciar automáticamente la aplicación cada vez que guardes un archivo.
```bash
npm run dev
```