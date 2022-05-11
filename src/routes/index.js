import express from "express";
import atletasRoutes from "./atletasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res
      .status(200)
      .send([
        { Titulo: "Associação de Futebol de Porto dos Santos" },
        { Rotas: "/atletas", Metodos: ["GET", "POST", "PUT", "DELETE"] },
      ]);
  });

  app.use(express.json(), atletasRoutes);
};

export default routes;
