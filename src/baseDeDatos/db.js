const mysql = require("mysql2");

// Para poder conectarnos a la base de datos usaremos un módulo de MySQL que nos permitirá hacer la conexión, luego le pasaremos las credenciales para poder conectarnos con el método ".createConnection()" y la ejecutaremos al principio del archivo de nuestro servidor Express

const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}

module.exports = connectDB;