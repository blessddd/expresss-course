const express = require("express");

const app = express();
const port = 3000;

// Request Params:
//  - Los request params son variables que se incluyen en las rutas del servidor
//  - Para agregar un request params en una ruta se debe poner ":" seguido de un nombre para que el objeto request lo detecte como si fuera un parametro dentro de la ruta.
//  Ejemplo: /users/:id

app.get("/users/:username/get-avatar", async (req, res) => {
  // También se puede acceder al parametro como si fuera una propiedad => req.params.propiedad
  const { username } = req.params;
  // Se redirecciona debido a que la imagen es de terceros, si se encontrará en el servidor se podría usar ".sendFile()"
  res.redirect(`https://unavatar.io/github/${username}`);
});

app.get("/hello/:user", (req, res) => {
  const { user } = req.params;
  res.send(`Hello ${user.toUpperCase()}`);
});

app.listen(port);
console.log(` - Server on port ${port}`);
