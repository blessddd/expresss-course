const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
  res.end(); // Finaliza la comunicación con el cliente (Navegador). 
});

app.listen(port);