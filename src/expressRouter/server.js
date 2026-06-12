const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");
const HomeRoutes = require("../routes/home.js");
const ErrorRoutes = require("../routes/notFound.js");

const app = express();
const port = 3000;

// Middlewares:
app.use(morgan("dev"));
app.use(express.json());

// Routes:
// Cuando la app crece, Express nos permite modularizar cada ruta en archivos separados para poder controlar de una mejor manera toda su lógica y para evitar que sea un archivo muy extenso y dificil de leer.
// Para poder hacer esto se utiliza el middleware de Express Router, este middleware se utiliza en cada archivo que defina las rutas del servidor y luego se exporta en el archivo principal donde se lanza el server.
// Al importarlo se agrega al servidor con el método ".use()"

app.use(HomeRoutes);
app.use(ErrorRoutes);

app.listen(port);
console.log(` - Server on port ${port}`);
