const app = require("./app/app");

const port = 8000; // ou a porta desejada

app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
