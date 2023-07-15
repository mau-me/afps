const db = require("../utils/database");

// Obter os gols da partida, somando os gols do mesmo jogador
exports.obterGolsDaPartida = (partidaId, callback) => {
  const query = `
    SELECT U.nome, U.vulgo, COUNT(*) AS total_gols
    FROM Gol G
    INNER JOIN Usuario U ON G.jogador_id = U.id
    WHERE G.partida_id = ?
    GROUP BY G.jogador_id
  `;

  db.query(query, partidaId, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

// Obter os cartões da partida
exports.obterCartoesDaPartida = (partidaId, callback) => {
  const query = `
    SELECT C.id, U.nome, U.vulgo, C.cor
    FROM Cartao C
    INNER JOIN Usuario U ON C.jogador_id = U.id
    WHERE C.partida_id = ?
  `;

  db.query(query, partidaId, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};
