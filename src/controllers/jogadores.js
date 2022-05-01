const Jogador = require("../models/jogadores");

module.exports = (app) => {
  app.get("/api/jogadores", (req, res) => {
    Jogador.buscaTodos(res);
  });

  app.get("/api/jogadores/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Jogador.buscaPorId(id, res);
  });

  app.post("/api/jogadores", (req, res) => {
    const jogador = req.body;
    Jogador.insere(jogador, res);
  });
};
