const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

// Rotas relacionadas aos usuários
router.get("/", usuarioController.obterTodosUsuarios);
router.post("/", usuarioController.criarUsuario);
router.get("/:id", usuarioController.obterUsuarioPorId);
// ...

module.exports = router;
