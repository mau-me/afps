import atletas from "../models/Atleta.js";

class AtletaController {
  static listarAtletas(req, res) {
    atletas.find((err, atletas) => {
      res.json(atletas);
    });
  }

  static listarAtletaPorId(req, res) {
    const id = req.params.id;
    atletas.findById(id, (err, result) => {
      if (err) {
        res
          .status(406)
          .send({ message: `Segue erro ao buscar o atleta: ${err.message}` });
      }

      res.json(result);
    });
  }

  static cadastrarAtleta(req, res) {
    const atleta = new atletas(req.body);
    atleta.save((err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Segue erro ao cadastrar atleta: ${err.message}` });
      }

      res.status(201).json(atleta);
    });
  }

  static atualizarAtleta(req, res) {
    const id = req.params.id;
    atletas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao atualizar atleta: ${err.message}` });
      }

      res.status(204).end();
    });
  }

  static apagarAtleta(req, res) {
    const id = req.params.id;
    atletas.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao apagar atleta: ${err.message}` });
      }

      res.status(204).end();
    });
  }

  static listarAtletaPorNome(req, res) {
    const nomeAtleta = req.query.nomeAtleta;
    atletas.find({ nome: nomeAtleta }, {}, (err, result) => {
      if (err) {
        res
          .status(406)
          .send({ message: `Segue erro ao buscar o atleta: ${err.message}` });
      }

      res.json(result);
    });
  }
}

export default AtletaController;
