const express = require("express");
const router = express.Router();

const mensalidadeController = require("../controllers/mensalidadeController");

// Rotas relacionadas às mensalidades
router.get("/", mensalidadeController.obterTodasMensalidades);
router.post("/", mensalidadeController.criarMensalidade);
router.get("/:id", mensalidadeController.obterMensalidadePorId);
router.get(
  "/nao-pagas/:mes/:ano",
  mensalidadeController.obterJogadoresNaoPagaramMensalidade
);

module.exports = router;
