const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");

const app = express();
const port = 3000;

// Los settings en express son configuraciones que podemos cambiar en express, podemos crear y modificar nuestras propias propiedades, o modificar propiedades propias de express.
// Las settings en expres tienen que ir antes de cualquier función debido a que el orden en que se lee cada función en express es la siguiente:
// Settings -> Middlewares -> Routes

// Para modificar una propiedad en express se usa el método ".set()", recibe como parametro el nombre de una propiedad, y luego el valor el cual se le asigna.
// Las propiedades que nosotros creemos pueden recibir cualquier nombre, y cualquier valor

// Settings:
app.set("case sensitive", "true"); // Propiedad exclusiva de express que aplica case sensitive en las rutas de la app
app.set("appName", "Práctica Express");
// Para obtener una propiedad de la configuración de express se utiliza el método ".get()"
// Por ej: app.get("appName"); => Devuelve: "Práctica Express"

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

app.listen(port);
console.log(` - Server on port ${port}`);
