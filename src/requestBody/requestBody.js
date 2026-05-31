const express = require("express");

const app = express();
const port = 3000;

// Request Body:
//  - Cuando el cliente realiza una consulta al servidor el objeto request obtiene información detallada sobre el archivo que nos envía, el tipo de archivo, la ruta, etc. Esto es util y importante para que podamos actuar según el tipo de información que nos envie el cliente.
//  - El modelo HTTP denomina tres partes importantes que obtiene el objeto Request:
//    * endpoint: La ruta en donde se realiza la consulta.
//    * Headers: Nos da información adicional sobre el tipo de archivo que envia la consulta.
//    * Body: Nos devuelve el archivo con la información del cliente.

// Se agregan estas funciones para que el servidor pueda detectar peticiones con ese tipo de archivos.
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Para formularios, extended habilita datos pesados dificiles de procesar

app.post("/create-account", (req, res) => {
  console.log(req.body); // Podemos acceder al contenido que la petición con "request.body()"
  res.send(" - Usuario creado exitosamente :D");
}) ;

app.listen(port);
console.log(` - Server on port ${port}`);
