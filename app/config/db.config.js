const Sequelize = require("sequelize");

const db = new Sequelize("db_bootcamp", "paola_brito", "1983", {
  host: "localhost",
  dialect: "postgres",
});

// 2. Sincronizamos con la base de datos
async function syncDB() {
  try {
    await db.authenticate();
    console.log("Connections has been established successfully");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
}
syncDB();

module.exports = db;
