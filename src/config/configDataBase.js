"use strict";
module.exports = {
  username: "root",
  password: "root",
  database: "star_factory_jewerly",
  host: "localhost",
  dialect: "mysql",
  logging: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

//CONFIGURACION EN MODO DE ARCHIVO JSON
// {
//   "development": {
//     "username": "root",
//     "password": "root",
//     "database": "star_factory_jewerly",
//     "host": "localhost",
//     "dialect": "mysql",
//     "logging": true,
//     "pool": {
//       "max": 5,
//       "min": 0,
//       "acquire": 30000,
//       "idle": 10000
//     }
//   }
// }
