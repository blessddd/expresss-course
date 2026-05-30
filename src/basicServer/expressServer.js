const express = require("express");
const { resolve } = require("path");

const app = express();
const port = 3000;

const getRootPath = (path) => {
  // "resolve()" es un método del módulo path de node.js que devuelve una ruta absoluta de cualquier archivo.
  // "resolve()" devuelve la ruta actual del directorio actual de ejecución, así que para evitar errores en las rutas podemos pasarle como primer parametro como referencia la variable "__dirname" para situarnos siempre en la carpeta del archivo actual
  return resolve(__dirname, path);
};

app.get("/home", (req, res) => {
  const path = "../../static/index.html";

  // .sendFile() es un método de express que nos permite devolver un archivo.
  // Como parametro se le debe pasar la ruta absoluta del archivo (desde la raíz del sistema).

  // Para solucionar este problema de dos formas:
  // - Se puede pasar como parametro un objeto para cambiar el root e indicarle que la carpeta raíz es la del proyecto y no la del sistema
  // - Usar la función "resolve()" del módulo path de Node.js pasandole como parámetro la ruta donde se encuentre el archivo.

  // Ejemplo 1:
  // res.sendFile(path, {
  //   root: __dirname
  // });

  // Ejemplo 2:
  res.sendFile(getRootPath(path));
});

app.listen(port);
console.log(` - Server on port ${port}`);
