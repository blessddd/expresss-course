const express = require("express");

const app = express();
const port = 3000;

// Queries:
//  - Las queries se utilizan como parametros dentro de la ruta que le indican al servidor datos para filtrar/ordenar datos en general de una respuesta.
//  - Para utilizar queries dentro de una ruta se utiliza el simbolo "?" seguido de la querie, la cual se le asigna un nombre y valor, como si fuera una variable
//    * Ejemplo: localhost:3000/post?page=1

//  - Para anidar más valores en una querie se utiliza el parametro "&" seguido de otra querie.
//    * Ejemplo: localhost:3000/watch?video=14068&tiempo=1000s

//  - Para acceder al valor de las queries se utiliza el método "req.query()"

app.get("/post", (req, res) => {
  if (req.query === "page") {
    const { page, limit } = req.query;
    return res.send(` - Página ${page} & Posts: ${limit}`);
  }
  res.send(" - Página normal, que miras gil");
});

app.listen(port);
console.log(` - Server on port ${port}`);
