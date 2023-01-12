const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

class dashboard_user extends Model {}
dashboard_user.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    user_name: {
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
    // modelName: "dashboard_user",
    //tableName: "dashboard_user",
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = dashboard_user;

// dashboard_user
//   .findAll({
//     attributes: ["id", "user_name", "user_password"],
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
