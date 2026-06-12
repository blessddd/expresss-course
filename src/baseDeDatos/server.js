const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");
const HomeRoutes = require("../routes/home-ejs.js");
const ErrorRoutes = require("../routes/notFound-ejs.js");
const connectDB = require("./db.js");
require("ejs");

const app = express();
const port = 3000;

connectDB();

app.set("view engine", "ejs");

// Middlewares:
app.use(morgan("dev"));
app.use(express.json());

// Routes:
app.use(HomeRoutes);
app.use(ErrorRoutes);

app.listen(port);
console.log(` - Server on port ${port}`);
