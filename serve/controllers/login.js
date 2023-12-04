const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.post("/login", async (req, res) => {
  const { correo, password } = req.body;
  const login = await prisma.usuario.findFirst({
    where: {
      correo: correo,
      password: password
    },
  });
  if (!login) {
    res.json({
      message: "Usuario no autorizado",
      error: "Usuario no autorizado",
    });
    return;
  }
  login.password = undefined;
  res.json({
    message: "Inicio de sesion correcto",
    data: login,
  });
});

module.exports = app;