const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");

const app = express();
const port = 3000;

// Como los middlewares son funciones que se ejecutan antes de llegar a un endpoint del servidor también se pueden usar middlewares de terceros ya desarrollados y testeados que cumplen el mismo proposito que nosotros queremos.
// En este caso vamos a usar "morgan", un paquete de terceros que actua como logger y nos devuelve información detallada sobre cada petición HTTP que sucede en el servidor. 

app.use(morgan("dev"));

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
