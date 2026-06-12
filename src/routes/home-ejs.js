const { error } = require("console");
const { Router } = require("express");
const { resolve } = require("path");

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenido al servidor :)");
});

router.get("/home", (req, res) => {
  res.status(200).render("index", {
    title: "Usuarios",
    users: [
      {
        id: 1,
        username: "blessddd",
        name: "Kevin Alvarez",
      },
      {
        id: 2,
        username: "MasiHELVECIA",
        name: "Maximiliano Furchini",
      },
      {
        id: 3,
        username: "petaking",
        name: "Ariel Amarilla",
      },
      {
        id: 4,
        username: "1block",
        name: "Juan Zucchi",
      },
    ],
  });
});

router.get("/about", (req, res) => {
  res.status(200).render("about", {
    data: [
      {
        id: 1,
        label: "Nombre",
        text: "Kevin Alvarez",
      },
      {
        id: 2,
        label: "Usuario",
        text: "blessddd",
      },
    ],
  });
});

router.get("/posts", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if(!response.ok) {
      const errorInfo = await response.json();

      const error = new Error(errorInfo.message || "Something went wrong");
      error.status = response.status;

      throw error;
    }

    const data = await response.json();
    res.
      status(200).
      render("posts", {
        title: "Posts",
        data: data
      });
  } catch(err) {
    res.
      status(err.status).
      json({
        success: false,
        message: err.message
      });
  }
});

module.exports = router;
