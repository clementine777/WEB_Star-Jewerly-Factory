const Sequelize = require("sequelize");
const config = require("./configDataBase.js");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    //operatorsAliases: false,
    host: config.host,
    dialect: config.dialect,
    logging: false, //habilitar para ver en consola las consultas sql
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  }
);
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.products = require("../models/products.js")(sequelize, Sequelize);
// db.users = require("../models/users.js")(sequelize, Sequelize);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("------CONECTION TO DATABASE------");
  })
  .catch((err) => {
    console.error("!!!***ERROR CONECTION DATABASE***!!!", err);
  });

module.exports = db.sequelize;
