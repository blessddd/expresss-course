const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");
const HomeRoutes = require("../routes/home-ejs.js");
const ErrorRoutes = require("../routes/notFound-ejs.js");

require("ejs");

const app = express();
const port = 3000;

// EJS:
// EJS es un motor de plantillas que permite combinar HTML con lógica de JavaScript para poder renderizar HTML desde el lado del servidor (Server Side Rendering 'SSR')
// Es muy útil para hacer sistemas ligeros de una manera rápida, solo hay que tener en cuenta que cada cambio que obtenga el servidor renderiza HTML desde cero, no como React que solo cambia el/los componente/s especificos/s de la interfaz que cambia su valor.
// Su sintaxis es fácil, se combina html y cuando queremos ejecutar código de JavaScript utilizamos <% %>, y si queremos obtener un dato del servidor le agregamos un "=" al principio de la etiqueta. Por ej => "<%= %>"
// Para poder mandar datos desde el servidor utilizamos el método .render cuando enviamos el response, le indicamos como primer parametro el archivo a donde queremos mandar la información, y luego en un objeto de JavaScript le pasamos los datos del servidor al Frontend.

// Para utilizarlo debemos incluir una configuración en Express para poder agregar la carpeta con los archivos ".ejs";

app.set("view engine", "ejs");

// Middlewares:
app.use(morgan("dev"));
app.use(express.json());

// Routes:
app.use(HomeRoutes);
app.use(ErrorRoutes);

app.listen(port);
console.log(` - Server on port ${port}`);
