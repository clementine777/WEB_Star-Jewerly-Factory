const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
//Modelo extendido .define no funciona
class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      field: "id_user",
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users",
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Users;

// Users.findAll({
//   attributes: [
//     "id_user",
//     "user_name",
//     "user_lastname",
//     "email",
//     "user_password",
//   ],
// })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
