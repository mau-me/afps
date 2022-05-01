const mysql = require("mysql2");

const host = process.env.HOST_DB;
const port = process.env.PORT_DB;
const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const database = process.env.DATABASE_DB;

const conexao = mysql.createConnection({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database,
});

module.exports = conexao;
