const Usuario = require("../models/usuarioModel");

// Controlador relacionado aos usuários

// Obter todos os usuários
exports.obterTodosUsuarios = (req, res) => {
  Usuario.obterTodosUsuarios((err, usuarios) => {
    if (err) {
      console.error("Erro ao obter os usuários: " + err.message);
      res.status(500).json({ error: "Erro ao obter os usuários." });
      return;
    }
    res.json(usuarios);
  });
};

// Criar um usuário
exports.criarUsuario = (req, res) => {
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
exports.obterUsuarioPorId = (req, res) => {
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
exports.excluirUsuarioPorId = (req, res) => {
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
