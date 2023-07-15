const mysql = require("mysql");

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

console.log(dbHost, dbUser, dbPassword, dbDatabase);

const db = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});

// Estabeleça a conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: " + err.message);
    return;
  }
  console.log("Conexão estabelecida com o banco de dados.");
});

module.exports = db;
