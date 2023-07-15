const Partida = require("../models/partidaModel");

// Obter os gols da partida, somando os gols do mesmo jogador
exports.obterGolsDaPartida = (req, res) => {
  const partidaId = req.params.id;

  Partida.obterGolsDaPartida(partidaId, (err, gols) => {
    if (err) {
      console.error("Erro ao obter os gols da partida: " + err.message);
      res.status(500).json({ error: "Erro ao obter os gols da partida." });
      return;
    }

    res.json(gols);
  });
};

// Obter os cartões da partida
exports.obterCartoesDaPartida = (req, res) => {
  const partidaId = req.params.id;

  Partida.obterCartoesDaPartida(partidaId, (err, cartoes) => {
    if (err) {
      console.error("Erro ao obter os cartões da partida: " + err.message);
      res.status(500).json({ error: "Erro ao obter os cartões da partida." });
      return;
    }

    res.json(cartoes);
  });
};
