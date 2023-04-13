const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas </h1>");
});

app.get("/json", (req, res) => {
    res.json({title: "Tarefa X", done: true})
})

app.get("/postman", (req, res) => {
    res.send("<h1>Praticando get com postman</h1>")
})

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});

