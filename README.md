# Proyecto de Autenticación con React y Node.js

Este proyecto es una aplicación de autenticación que utiliza React para el frontend y Node.js con Express y MongoDB para el backend.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/amarillaRodrigo/contextSessionExerc
   cd contextSessionExerc
   ```

2. Instala las dependencias del backend:

   ```
   cd backend
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd client
   npm install
   ```

## Ejecución

1. Inicia el servidor backend:

   ```
   cd backend
   npm run dev
   ```

2. Inicia la aplicación frontend:
   ```
   cd client
   npm run dev
   ```

## Uso

1. Abre tu navegador y navega a `http://localhost:5173/` y en caso de no funcionar, revisar y utilizar la url que se muestra en la consola desde la cual se inicio la aplicacion frontend.
2. Inicia sesión con el siguiente correo electrónico y contraseña:
   - Correo electrónico: `eliastinuk@gmail.com`
   - Contraseña: `elias9`
3. Después de iniciar sesión, serás redirigido a la página de inicio donde verás un mensaje de bienvenida con tu nombre.

## Estructura del Proyecto

- `backend`: Contiene el código del servidor Node.js con Express y MongoDB.
- `client`: Contiene el código de la aplicación React.

## Dependencias

### Backend

- `express`
- `mongoose`
- `bcrypt`
- `jsonwebtoken`
- `cors`

### Frontend

- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`
