const customExpress = require("./config/customExpress");
require("dotenv").config();

const app = customExpress();
const portServer = process.env.PORT_SERVER;

app.get("/", (req, res) => {
  res.status(200).json({
    Resultado: "Olá Mundo",
    chave01: process.env.HOST_DB,
    chave02: process.env.DATABASE_DB,
  });
});

app.listen(portServer, () => {
  console.log(`API da AFPS rodando em http://localhost:${portServer}`);
});
