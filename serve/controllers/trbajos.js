const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisama = new PrismaClient();

app.get("/trabajos", async (req, res) => {
  const trabajos = await prisama.trabajos.findMany({});
  res.json(trabajos);
});

app.post("/trabajos", async (req, res) => {
  const trabajos = await prisama.trabajos.create({
    data: req.body,
  });
  res.json({
    message: "trabajos creados ",
    data: trabajos,
  });
});

app.put("/trabajos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const trab = await prisama.trabajos.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json({
    message: "trabajos Actualizados",
    data: trab,
  });
});

app.delete("/trabajos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const trab = await prisama.trabajos.delete({
    where: {
      id,
    },
  });
  res.json({ message: "trabajo eiminado" });
});
module.exports = app;
