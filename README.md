# Youtube Challenge

Este proyecto es una aplicación web que permite a los usuarios interactuar con videos de YouTube.

## Índice

- [Deployment](#deployment)
- [Env variables](#envVariables)
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)

## deployment

La aplicación se encuentra desplegada en vercel, y puede ser consultada en el siguiente link `https://youtube-express-challenge.vercel.app/`.

## envVariables

Para que el proyecto pueda correr exitosamente se deben agregar las respectivas variables de entorno

PORT=8000
YOUTUBE_API_KEY=AIzaSyBPgcqgW0KYlldtj5Le3LIqdyuAzHE7ums
DB_URI=mongodb+srv://youtube:42t9Nhxssr4sW6XO@cluster0.q52p2ji.mongodb.net/?retryWrites=true&w=majority

## Descripción

La aplicación está construida con Express.js y utiliza CORS para permitir solicitudes desde ciertos orígenes. La lista de orígenes permitidos se puede configurar en el archivo `app.ts`.

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio: `git clone git@github.com:lualreye/youtube-express-challenge.git`
2. Instala las dependencias: `npm install`
3. Ejecuta el servidor: `npm start`

## Uso

Para utilizar esta aplicación, navega a `http://localhost:3000` en tu navegador.
