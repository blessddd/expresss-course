const { Router } = require("express");
const { resolve } = require("path");

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenido al servidor :)");
});

router.get("/home", (req, res) => {
  res.sendFile(resolve(__dirname, "../../static/index.html"));
});

module.exports = router;