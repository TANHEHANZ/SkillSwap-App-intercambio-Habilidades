const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisam = new PrismaClient();

app.get("/comentarios", async (req, res) => {
  const comentarios = await prisam.comentarios.findMany({});
  res.json(comentarios);
});

app.get("/comentarios/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const comentarios = await prisam.comentarios.findMany({
    where: {
      usuarioId: id,
    },
  });
  res.json(comentarios);
});

app.post("/comentarios", async (req, res) => {
  const id = parseInt(req.params.id);
  const comentarios = await prisam.comentarios.create({
    data: req.body,
  });
  res.json({
    message: "A comentado ",
    data: comentarios,
  });
});

app.put("/comentarios/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const comentarios = await prisam.comentarios.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json({
    message: "comentario actualizado",
    data: comentarios,
  });
});

app.delete("/comentarios/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const comentarios = await prisam.comentarios.delete({
    where: { id },
  });
  res.json({
    message: "Comentario eliminado",
    data: comentarios,
  });
});
module.exports = app;
