const mysql = require("mysql2");

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const conexao = mysql.createConnection({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database,
});

module.exports = conexao;
