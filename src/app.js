const express = require("express");
const app = express();
const { port } = require('./config/env');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});