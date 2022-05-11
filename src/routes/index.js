import express from "express";
import atletasRoutes from "./atletasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res
      .status(200)
      .send({ Titulo: "Associação de Futebol de Porto dos Santos" });
  });

  app.use(express.json(), atletasRoutes);
};

export default routes;
