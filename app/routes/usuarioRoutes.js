const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

// Rotas relacionadas aos usuários
router.get("/", usuarioController.obterTodosUsuarios);
router.post("/", usuarioController.criarUsuario);

// Rota para obter os jogadores com suas posições
router.get("/jogadores", usuarioController.obterJogadores);

// Rota para obter os outros membros não atletas
router.get("/membros", usuarioController.obterOutrosMembros);

router.get("/:id", usuarioController.obterUsuarioPorId);

module.exports = router;
