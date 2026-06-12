const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middlewares:
app.use(morgan("dev"));
app.use(express.json());

// Routes:
app.get("/", (req, res) => {
  res.send("Bienvenido al servidor :)");
});

app.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
});

app.get("/*path", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "../../static/not-found.html"));
});

// Static Middleware:
// Express nos deja usar un middleware para poder servir archivos estáticos directamente al navegador sin tener que crear una ruta para cada archivo.
//  - Esto nos sirve para poder mostrar interfaces del frontend, sin tener que usar el método ".sendFile()"
//  - Para usarlo tenemos que agregarlo como middleware y especificarle la ruta de la carpeta con los archivos que queremos mostrar
//  - También podemos modificar la ruta agregandoselo delante del nombre del archivo.

app.use("/public",  express.static(path.resolve(__dirname, "../static/")));
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads/")));

app.listen(port, () => {
  console.log(` - Server at port ${port}`);
});
