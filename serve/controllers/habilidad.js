const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/habilidad", async (req, res) => {
  const habilidad = await prisma.habilidad.findMany({});
  res.json(habilidad);
});

app.get("/habilidades", async (req, res) => {
  const habilidad = await prisma.habilidad.findMany({
    where: {
      estado: "true",
    },
  });
  res.json(habilidad);
});

app.post("/habilidad", async (req, res) => {
  const habilidad = await prisma.habilidad.create({
    data: req.body,
  });
  res.json({
    message: "habilidad creada",
    data: habilidad,
  });
});

app.put("/habilidad/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const habilidad = await prisma.habilidad.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json({
    message: "habilidad actualizada",
    data: habilidad,
  });
});

app.delete("/habilidad/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const habilidad = await prisma.habilidad.delete({
    where: {
      id,
    },
  });
  res.json({ message: "habilidad eliminada", data: habilidad });
});

module.exports = app;
