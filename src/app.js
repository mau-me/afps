import "dotenv/config";
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
  console.log("Conexão com o BD realizada com sucesso!!!");
});

const app = express();

routes(app);

export default app;
