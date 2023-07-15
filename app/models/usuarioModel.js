const db = require("../utils/database");

// Modelo relacionado aos usuários

// Obter todos os usuários
exports.obterTodosUsuarios = (callback) => {
  const query = "SELECT * FROM Usuario";

  db.query(query, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

// Criar um usuário
exports.criarUsuario = (novoUsuario, callback) => {
  const query = "INSERT INTO Usuario SET ?";

  db.query(query, novoUsuario, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    const usuarioId = result.insertId;
    exports.obterUsuarioPorId(usuarioId, callback);
  });
};

// Obter um usuário por ID
exports.obterUsuarioPorId = (usuarioId, callback) => {
  const query = "SELECT * FROM Usuario WHERE id = ?";

  db.query(query, usuarioId, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (result.length === 0) {
      callback(null, null);
      return;
    }

    const usuario = result[0];
    callback(null, usuario);
  });
};

// Excluir um usuário por ID
exports.excluirUsuarioPorId = (usuarioId, callback) => {
  const query = "DELETE FROM Usuario WHERE id = ?";

  db.query(query, usuarioId, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};
