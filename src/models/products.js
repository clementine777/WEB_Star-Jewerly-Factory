const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
//Modelo extendido .define no funciona
class products extends Model {}
products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      field: "id_product",
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.STRING,
    },
    material: {
      type: DataTypes.STRING,
    },
    product_type: {
      type: DataTypes.STRING,
    },
    pics: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "products",
    tableName: "products",
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = products;

// Products.findAll({
//   attributes: [
//     "id_product",
//     "product_name",
//     "price",
//     "product_description",
//     "stock",
//     "weight",
//     "material",
//     "product_type",
//     "pics",
//   ],
// })
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(Products);
