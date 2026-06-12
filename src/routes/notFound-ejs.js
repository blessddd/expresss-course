const { Router } = require("express");
const { resolve } = require("path");

const router = Router();

router.get("/*path", (req, res) => {
  res.
    status(404).
    render("not-found");
});

module.exports = router;