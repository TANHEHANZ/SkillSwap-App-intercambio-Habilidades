const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
  const ususario = await prisma.usuario.findMany({});
  res.json(ususario);
});
app.post("/user", async (req, res) => {
  try {
    const existingUsername = await prisma.usuario.findUnique({
      where: {
        nombre: req.body.nombre,
      },
    });

    const existingEmail = await prisma.usuario.findUnique({
      where: {
        correo: req.body.correo,
      },
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "El nombre de usuario ya está en uso",
      });
    }

    if (existingEmail) {
      return res.status(400).json({
        message: "El correo electrónico ya está en uso",
      });
    }
    if (!existingUsername || !existingEmail) {
      const usuario = await prisma.usuario.create({
        data: req.body,
      });

      return res.json({
        message: "Usuario Creado",
        data: usuario,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
      error: error.message,
    });
  }
});

app.put("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const ususario = await prisma.usuario.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json({
    message: "Usuario Actualizado",
    data: ususario,
  });
});

app.delete("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const ususario = await prisma.usuario.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "Usuario eliminado",
    data: ususario,
    status: 200,
  });
});

module.exports = app;
