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
```

### 2. Instalación de Dependencias

Instala todas las librerías necesarias (express, mongoose, dotenv, cors, nodemon):

```bash
npm install
```

### 3. Configuración de Variables de Entorno 

La aplicación utiliza variables de entorno para manejar la configuración sensible.

Debes renombrar el archivo .env.template:
Cambia su nombre por .env y añade las siguientes variables con tus credenciales:

Puerto en el que se ejecutará el servidor local:

```bash
PORT=3000
```

URI de tu base de datos en MongoDB Atlas:

```bash
APIKEY="mongodb+srv://admin:<db_password>@cluster0.ur0rhy9.mongodb.net/<nombre-de-tu-proyecto-en-BD>"
```


