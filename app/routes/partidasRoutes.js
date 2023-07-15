const express = require("express");
const router = express.Router();

const partidaController = require("../controllers/partidaController");

// Rota para obter os gols da partida somando os gols do mesmo jogador
router.get("/:id/gols", partidaController.obterGolsDaPartida);

// Rota para obter os cartões da partida
router.get("/:id/cartoes", partidaController.obterCartoesDaPartida);

module.exports = router;
