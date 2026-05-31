const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

// El orden en el que agregamos los middleware importan debido a que en Express se ejecutan las funciones de manera secuencial.

// Middleware logger:
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

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/profile/:username", (req, res) => {
  const { username } = req.params;
  res.send(`${username.toUpperCase()}'s Profile`);
});

// "Auth" middleware:
// Se pone justo antes de procesar la URL debido a que el middleware se ejecuta si o sí sin importar la URL o si hacemos una verificación.
app.use((req, res, next) => {
  const { login } = req.query;
  if(login === "CreaTecGoat") {
    return next();
  }
  res.send(" - No tienes acceso a esta página");
})

app.get("/dashboard", (req, res) => {
  res.send(" - Dashboard");
});

app.get("/*path", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "../../static/not-found.html"));
});

app.listen(port);
console.log(` - Server on port ${port}`);
