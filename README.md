# **DevTree**

**Mis Enlaces** es una aplicación full-stack que permite gestionar usuarios, autenticar mediante JWT, y subir imágenes a la nube con Cloudinary. Está construida con un backend en Node.js (Express) y un frontend en React (TypeScript), con MongoDB como base de datos.

## **Características**

- **Backend**:
  - API RESTful creada con Node.js y Express.
  - Autenticación mediante JWT.
  - Almacenamiento de usuarios y datos utilizando MongoDB (Mongoose).
  - Subida de imágenes a Cloudinary.
  - Middleware para proteger rutas con JWT.

## **Estructura del Proyecto**

### **Backend**
- **index.js**: Archivo principal del servidor.
- **/src/models**: Modelos de datos (User, etc.).
- **/src/routes**: Rutas de la API (autenticación, usuario, etc.).
- **/src/controllers**: Lógica para manejar las solicitudes.
- **/src/middleware**: Middleware para autenticación y validación.
- **/src/config**: Archivos de configuración (MongoDB, Cloudinary, etc.).

## **Instalación**

### **Requisitos Previos**

1. Tener instalado **Node.js** y **npm**.
2. Tener una cuenta en **MongoDB** y **Cloudinary** para las configuraciones de base de datos y gestión de imágenes.


#### **Backend**

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd backend
