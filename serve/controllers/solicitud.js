const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/solicitud", async (req, res) => {
  const soli = await prisma.solicitud.findMany({});
  res.json(soli);
});
app.post("/solicitud", async (req, res) => {
  const soli = await prisma.solicitud.create({
    data: req.body,
  });
  res.json({
    message: "Solicitud creada",
    data: soli,
  });
});
app.put("/solicitud/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const soli = await prisma.solicitud.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json({
    message: "Solicitud actualizada",
    data: soli,
  });
});
app.delete("/solicitud/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const soli = await prisma.solicitud.delete({
    where: {
      id,
    },
  });
  res.json({ message: "Solicitud eliminada", data: soli });
});

module.exports = app;
