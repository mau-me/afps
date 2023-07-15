const db = require("../utils/database");

// Modelo relacionado às mensalidades
exports.obterTodasMensalidades = (callback) => {
  const query = "SELECT * FROM Mensalidade";

  db.query(query, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

exports.criarMensalidade = (novaMensalidade, callback) => {
  const query = "INSERT INTO Mensalidade SET ?";

  db.query(query, novaMensalidade, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    const mensalidadeId = result.insertId;
    exports.obterMensalidadePorId(mensalidadeId, callback);
  });
};

// Obter uma mensalidade por ID
exports.obterMensalidadePorId = (mensalidadeId, callback) => {
  const query = "SELECT * FROM Mensalidade WHERE id = ?";

  db.query(query, mensalidadeId, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (result.length === 0) {
      callback(null, null);
      return;
    }

    const mensalidade = result[0];
    callback(null, mensalidade);
  });
};

// Obter jogadores que não pagaram a mensalidade em um determinado mês
exports.obterJogadoresNaoPagaramMensalidade = (mes, ano, callback) => {
  const query = `
    SELECT *
    FROM Usuario
    WHERE tipo = 'atleta' AND id NOT IN (
      SELECT jogador_id
      FROM Mensalidade
      WHERE MONTH(mes_referencia) = ? AND YEAR(mes_referencia) = ?
    )
  `;

  db.query(query, [mes, ano], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};
