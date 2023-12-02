const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
dotenv.config();
var bodyParser = require("body-parser");

const usuario = require("./controllers/usuario");
const solicitud = require("./controllers/solicitud");
const trabajos = require("./controllers/trbajos");
const habilidades = require("./controllers/habilidad");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.use(usuario);
app.use(solicitud);
app.use(trabajos);
app.use(habilidades);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
