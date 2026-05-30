const express = require("express");

const app = express();
const port = 3000;

// HTTP Methods:
//  - Los métodos HTTP son métodos que ayudan al servidor a distinguir la lógica a utilizar según el tipo de consulta que se le haga.
//  - A estos métodos se los denominan verbos HTTP que surgen a partir del tipo de comunicación que utiliza el protocolo HTTP.
//  - Los métodos más cómunes son:
//    * GET: Este método se utiliza para solicitar datos/información al servidor.
//    * POST: Este método se utiliza para crear o enviar nuevos datos en el servidor.
//    * PUT: Este método se utiliza para reemplazar o actualizar por completo un dato existente en el servidor.
//    * PATCH: Este método se utiliza para actualizar parcialmente un dato en el servidor.
//    * DELETE: Este método se utiliza para eliminar datos/información del servidor.

app.get("/post", (req, res) => {
  console.log("GET /post");
  res.send(" - Posts existentes: ...");
});

app.post("/post", (req, res) => {
  res.send(" - Creando post :D");
});

app.put("/post", (req, res) => {
  res.send(" - Actualizando por completo el post ...");
});

app.patch("/post", (req, res) => {
  res.send(" - Actualizando parcialmente el post ...");
});

app.delete("/post", (req, res) => {
  res.send(" - Eliminando el post ...");
});

app.listen(3000);
console.log(` - Server on port ${port}`);
