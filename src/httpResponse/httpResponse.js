const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

//  HTTP Response:
//   - Las HTTP responses es una manera en la que el servidor se comunica con el cliente cuando recibe una petición HTTP.
//   - El servidor puede comunicarse con el cliente de varias formas, ya sea enviando, texto, imagenes o archivos HTML, JSON, etc.
//   - A la hora de responder el servidor también puede enviar códigos de estado para informar de una manera rápida el estado final de la operación, como por ej si fue exitosa.
//   - Los códigos de estado los manda automáticamente Express, pero también podemos alterarlos con los métodos:
//     * "response.sendStatusCode()": Envia SOLO el código de estado.
//     * "response.status()": Permite enviar el código y también concatenarlo con el método ".end()" para enviar un mensaje.
//   Nota: Ambos métodos cumplen el mismo proposito.

// Para enviar texto se utiliza el método "response.send()"
app.get("/", (req, res) => {
  res.send("home");
});

// Para enviar archivos HTML se utiliza el método "response.sendFile()"
app.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
});

// Para enviar archivos json se usa el parametro "response.json()"
app.get("/users", async (req, res) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  res.json(users);
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204); // 204 -> La consulta fue exitosa pero no devolvió nada
});

app.listen(port);
console.log(` - Server on port ${port}`);
