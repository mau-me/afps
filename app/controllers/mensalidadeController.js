const Mensalidade = require("../models/mensalidadeModel");

// Controlador relacionado às mensalidades
exports.obterTodasMensalidades = (req, res) => {
  Mensalidade.obterTodasMensalidades((err, mensalidades) => {
    if (err) {
      console.error("Erro ao obter as mensalidades: " + err.message);
      res.status(500).json({ error: "Erro ao obter as mensalidades." });
      return;
    }
    res.json(mensalidades);
  });
};

exports.criarMensalidade = (req, res) => {
  const { jogador_id, valor, data_pagamento, mes_referencia } = req.body;

  const novaMensalidade = {
    jogador_id,
    valor,
    data_pagamento,
    mes_referencia,
  };

  Mensalidade.criarMensalidade(novaMensalidade, (err, mensalidade) => {
    if (err) {
      console.error("Erro ao criar a mensalidade: " + err.message);
      res.status(500).json({ error: "Erro ao criar a mensalidade." });
      return;
    }

    res.json(mensalidade);
  });
};

// Obter uma mensalidade por ID
exports.obterMensalidadePorId = (req, res) => {
  const mensalidadeId = req.params.id;

  Mensalidade.obterMensalidadePorId(mensalidadeId, (err, mensalidade) => {
    if (err) {
      console.error("Erro ao obter a mensalidade: " + err.message);
      res.status(500).json({ error: "Erro ao obter a mensalidade." });
      return;
    }

    if (!mensalidade) {
      res.status(404).json({ error: "Mensalidade não encontrada." });
      return;
    }

    res.json(mensalidade);
  });
};

// Obter jogadores que não pagaram a mensalidade em um determinado mês
exports.obterJogadoresNaoPagaramMensalidade = (req, res) => {
  const { mes, ano } = req.params;

  Mensalidade.obterJogadoresNaoPagaramMensalidade(
    mes,
    ano,
    (err, jogadores) => {
      if (err) {
        console.error(
          "Erro ao obter os jogadores que não pagaram a mensalidade: " +
            err.message
        );
        res
          .status(500)
          .json({
            error: "Erro ao obter os jogadores que não pagaram a mensalidade.",
          });
        return;
      }

      res.json(jogadores);
    }
  );
};
