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

// Obter jogadores com suas posições
exports.obterJogadores = (callback) => {
  const query = `
    SELECT u.id, u.nome, u.data_nascimento, u.vulgo, u.telefone, u.email, u.tipo, GROUP_CONCAT(p.posicao) AS posicoes
    FROM Usuario u
    LEFT JOIN Posicao p ON u.id = p.jogador_id
    GROUP BY u.id, u.nome, u.data_nascimento, u.vulgo, u.telefone, u.email, u.tipo
    HAVING posicoes IS NOT NULL
  `;

  db.query(query, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    const jogadoresComPosicoes = result.map((row) => {
      const jogador = {
        id: row.id,
        nome: row.nome,
        data_nascimento: row.data_nascimento,
        vulgo: row.vulgo,
        telefone: row.telefone,
        email: row.email,
        tipo: row.tipo,
        posicoes: row.posicoes ? row.posicoes.split(",") : [],
      };

      return jogador;
    });

    callback(null, jogadoresComPosicoes);
  });
};

// Obter outros membros não atletas
exports.obterOutrosMembros = (callback) => {
  const query = "SELECT * FROM Usuario WHERE tipo NOT IN ('atleta')";

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
