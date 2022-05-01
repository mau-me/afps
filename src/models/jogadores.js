const connect = require("../infra/connect");

class Jogador {
  buscaTodos(res) {
    const sql = "SELECT * FROM jogadores";

    connect.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = "SELECT * FROM jogadores WHERE id = ?";

    connect.query(sql, id, (erro, resultados) => {
      const usuario = resultados[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(usuario);
      }
    });
  }

  insere(jogador, res) {
    const sql = "INSERT INTO jogadores SET ?";
    connect.query(sql, jogador, (erro, result) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id: result.insertId });
      }
    });
  }
}

module.exports = new Jogador();
