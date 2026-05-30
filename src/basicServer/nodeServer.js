const { createReadStream } = require("fs");
const { createServer } = require("http");
const port = "3000";

const server = createServer((request, response) => {
  const url = request.url;

  if (url === "/home") {
    const read = createReadStream("./static/index.html", "utf-8");
    read.pipe(response); // Envía el contenido del archivo a medida que lo vaya pidiendo el servidor
  } else {
    const read = createReadStream("./static/not-found.html", "utf-8");
    read.pipe(response);
  }
});

server.listen(port);
console.log(` - Server on port ${port}`);
