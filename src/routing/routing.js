const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

// Routing:
//  - Routing es la manera en que el servidor responde cuando el usuario va cambiando de URL en el navegador a medida que va usando la página.
//  - Para manejar esas request se utiliza el método ".get()" de express, el cual nos permite responder de distintas maneras según la ruta actual del navegador.

app.get("/", (req, res) => {
  // El método send es exclusivo de express, nos permite enviar un texto al cliente (navegador).
  // También sirve para administrar datos como el estado que se devuelve al cliente.
  res.send("Raíz de la app :)");
});

app.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
});

app.get("/about", (req, res) => {
  res.send("About");
});

// Para devolver una página que administre el error 404 se puede:
//  - Usar el método ".get()" y pasarle como parametro "*".
//  - Usar el método ".use()"
//  Nota: Ambas ejemplos realizan lo mismo.

// Ejemplo 1:
// app.get("*", (req, res) => res.status(404).send("Error 404, Page Not found"));

// Ejemplo 2:
app.use((req, res) => {
  res.
    status(404).
    sendFile(resolve(__dirname, "../../static/not-found.html"));
});

app.listen(port);
console.log(` - Server on port ${port}`);