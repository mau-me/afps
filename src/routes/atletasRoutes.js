import express from "express";
import LivroController from "../controllers/atletasControllers.js";

const router = express.Router();

router
  .get("/atletas", LivroController.listarAtletas)
  .get("/atletas/busca", LivroController.listarAtletaPorNome)
  .get("/atletas/:id", LivroController.listarAtletaPorId)
  .post("/atletas", LivroController.cadastrarAtleta)
  .put("/atletas/:id", LivroController.atualizarAtleta)
  .delete("/atletas/:id", LivroController.apagarAtleta);

export default router;
