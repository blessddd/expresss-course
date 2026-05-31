const express = require("express");

const app = express();
const port = 3000;

// Method ".all()"
//  - El método ".all()" le permite a una ruta manejar cualquier petición sin importar su tipo

app.all("/handle-all", (req, res) => {
  res.send(" - Esta ruta responde a cualquier tipo de petición HTTP");
});

app.listen(port);
console.log(` - Server on port ${port}`);
