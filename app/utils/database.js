const databaseURL = process.env.DATABASE_URL;
const databaseSSL = process.env.DB_SSL == "true";

let ssl;

const db = require("knex")({
  client: "pg",
  connection: {
    connectionString: databaseURL,
    ssl: databaseSSL ? { rejectUnauthorized: false } : false,
  },
});

(async () => {
  try {
    const tableName = "usuarios";
    const exists = await db.schema.hasTable(tableName);
    if (!exists) {
      await db.schema.createTable(tableName, (table) => {
        table.increments("id").primary();
        table.text("nome");
        table.text("vulgo");
        table.date("nascimento");
        table.text("telefone");
        table.text("email");
        table.text("posicao");
        table.enu("tipo", ["admin", "comissao", "jogador"]);
      });
    }
  } catch (error) {
    console.error(error);
  }
})();

module.exports = db;
