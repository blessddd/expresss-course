const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

// Middlewares:
//  - Los middlewares son funciones que se ejecutan antes de que la petición del usuario llegue al servidor.
//  - Son utiles para controlar las peticiones que llegan al servidor antes de mostrar un resultado, esto es útil para proteger rutas de nuestra app para que no entre cualquier persona, por ej: Evitar que alguien que no tenga una cuenta vea un dashboard.

// Para usar un middleware se utiliza el método ".use()" antes de procesar cualquier ruta del servidor para que la consulta del usuario pase por este método y ejecute la función del middleware.
// Para evitar que la página quede en un loop infinito se usa el parametro next() de la función anonima utilizada en el método ".use()", esto le indica al servidor que puede continuar y manejar las diferentes peticiones HTTP de cada endpoint.

// Ejemplo básico de un middleware:
app.use((req, res, next) => {
  console.log(` - URL: ${req.url}, METHOD: ${req.method}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Bienvenido al servidor :)");
});

app.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
});

app.get("/*path", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "../../static/not-found.html"));
});

app.listen(port);
console.log(` - Server on port ${port}`);
