const { Router } = require("express");
const { resolve } = require("path");

const router = Router();

router.get("/*path", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "../../static/not-found.html"));
});

module.exports = router;