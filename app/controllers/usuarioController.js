const Usuario = require("../models/usuarioModel");

const usuarioController = {};

// Controlador relacionado aos usuários

// Obter todos os usuários
usuarioController.obterTodosUsuarios = async (req, res) => {
  const usuarios = await Usuario.obterTodosUsuarios();
  res.json(usuarios);
};

// Obter jogadores com suas posições
usuarioController.obterJogadores = (req, res) => {
  Usuario.obterJogadores((err, jogadores) => {
    if (err) {
      console.error("Erro ao obter os jogadores: " + err.message);
      res.status(500).json({ error: "Erro ao obter os jogadores." });
      return;
    }

    res.json(jogadores);
  });
};

// Obter outros membros não atletas
usuarioController.obterOutrosMembros = (req, res) => {
  Usuario.obterOutrosMembros((err, membros) => {
    if (err) {
      console.error("Erro ao obter os membros: " + err.message);
      res.status(500).json({ error: "Erro ao obter os membros." });
      return;
    }

    res.json(membros);
  });
};

// Criar um usuário
usuarioController.criarUsuario = (req, res) => {
  const { nome, data_nascimento, vulgo, telefone, email, posicao, tipo } =
    req.body;

  const novoUsuario = {
    nome,
    data_nascimento,
    vulgo,
    telefone,
    email,
    posicao,
    tipo,
  };

  Usuario.criarUsuario(novoUsuario, (err, usuario) => {
    if (err) {
      console.error("Erro ao criar o usuário: " + err.message);
      res.status(500).json({ error: "Erro ao criar o usuário." });
      return;
    }

    res.json(usuario);
  });
};

// Obter um usuário por ID
usuarioController.obterUsuarioPorId = (req, res) => {
  const usuarioId = req.params.id;

  Usuario.obterUsuarioPorId(usuarioId, (err, usuario) => {
    if (err) {
      console.error("Erro ao obter o usuário: " + err.message);
      res.status(500).json({ error: "Erro ao obter o usuário." });
      return;
    }

    if (!usuario) {
      res.status(404).json({ error: "Usuário não encontrado." });
      return;
    }

    res.json(usuario);
  });
};

// Excluir um usuário por ID
usuarioController.excluirUsuarioPorId = (req, res) => {
  const usuarioId = req.params.id;

  Usuario.excluirUsuarioPorId(usuarioId, (err, result) => {
    if (err) {
      console.error("Erro ao excluir o usuário: " + err.message);
      res.status(500).json({ error: "Erro ao excluir o usuário." });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Usuário não encontrado." });
      return;
    }

    res.json({ message: "Usuário excluído com sucesso." });
  });
};

module.exports = usuarioController;
