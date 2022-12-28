//const { where } = require("sequelize");
const { sequelize, products } = require("../models/products");

//consulata toda la tabala
const loadAllPorducts = (req, res) => {
  products
    .findAll()
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

//consulta de a uno con  por primary key
const selectIdProducts = (req, res) => {
  products
    .findByPk(req.params.id)
    .then((product) => {
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

//crea un nuevo producto en la DB
const addProduct = async (req, res) => {
  const newProduct = await products.create({
    product_name: req.body.product_name,
    price: req.body.price,
    product_description: req.body.product_description,
    stock: req.body.stock,
    weight: req.body.weight,
    material: req.body.material,
    product_type: req.body.product_type,
    pic: req.body.pic,
  });
  if (newProduct) {
    return res.send(newProduct);
  } else {
    return res.status(404).send({ message: "Product not created" });
  }
};

//elimina un proucto de la DB
const deleteProduct = async function deleteProduct(req, res) {
  try {
    const product = await products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    await product.destroy();
    return res.send({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//modifica productos ya creados en la DB

const updateProduct = async function updateProduct(req, res) {
  try {
    const product = await products.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    const updatedProduct = await product.update(req.body);
    return res.send(updatedProduct);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  loadAllPorducts,
  selectIdProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
