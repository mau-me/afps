const express = require("express");
const router = express.Router();

const usuarioRoutes = require("./usuarioRoutes");
const mensalidadeRoutes = require("./mensalidadeRoutes");
const partidasRoutes = require("./partidasRoutes.js");

router.get("/", (req, res) => {
  res.send("AFPS");
});
router.use("/usuarios", usuarioRoutes);
router.use("/mensalidades", mensalidadeRoutes);
router.use("/partidas", partidasRoutes);

module.exports = router;
